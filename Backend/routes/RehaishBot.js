const {OpenAI} = require('openai');
require('dotenv').config();

const router= require('express').Router();
const Hostels = require('../models/hostelModel');

router.post('/', async (req, res) => {

    const message=req.body.message;
    const openAI = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY || "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"
    });
    
    
    function getTimeOfDay(){
        return '5:45'
    }
    
    async function getHostels(city) {
        try {
            const hostels = await Hostels.find({ city: city });
            // Convert hostels to a string or format the data as needed
            return JSON.stringify(hostels);
        } catch (e) {
            console.log(e);
            return "No hostels found";
        }
    }
    
    function getOrderStatus(orderId){
        console.log(`Getting the status of order ${orderId}`)
        const orderAsNumber = parseInt(orderId);
        if (orderAsNumber % 2 == 0) {
            return 'IN_PROGRESS'
        }
        return 'COMPLETED'
    }
    
    async function callOpenAIWithTools(messageIn) {
        const context = [
            {
              role: 'system',
              content: `#Role: You are a [senior customer support rep/customer success manager/account executive] who is an expert in everything related to Rehaish, which is a marketplace where students can search for hostels and other accommodations by entering information, and you help them answer their questions.
          
          #Objective: Your objective is to answer questions accurately from users about Rehaish and engage them in a fun conversation.
          
          #Context: Rehaish aims to provide an online marketplace for students to search, compare and book budget hostel accommodations provided by hostel owners. The platform will have web and mobile apps for students and owners. Core features include user management, hostel listings, search and discovery, online booking, payments, chat-bot to facilitate students/users, reviews and ratings, hostel owner dashboard, and an admin portal. Students can search for available hostels by location, amenities, price etc and book rooms by making online payments. Hostel owners can register and create detailed listings with room details, pricing and policies. The chatbot will facilitate queries related to payment, how to use the app/website, room recommendations. Students can submit ratings and reviews post-stay. The admin portal will handle approvals, policy enforcement, dispute resolution and analytics. Key workflows are hostel listing creation by owners, discovery and booking by students, payments and reviews. The scope is limited to hostel and student accommodation rentals for university students in major Pakistani cities. Verification of properties, few days room booking as a traveler and legal agreements are out of scope.
          
          #Audience: Your audience is university students and hostel owners interested in learning about or using Rehaish. They must have a wonderful experience learning about Rehaish, so you must be encouraging, provide clear responses, and make it easy to understand.
          
          #DataSource: In the connected data source, you will find information in the format of text explaining the details of the Rehaish platform, features, and workflows. Please search through this content to find the most relevant information for the user based on their message.
          
          #Style: You must always use structured formatting including bullet points, bolding, and headers. Be friendly and engaging with the user and offer them important links:
          
          1) www.rehaish.com
          2) www.rehaish.com/support
          3) www.rehaish.com/blog
          
          #Other rules: Do not make up information. Do not talk about topics outside of Rehaish. If you ever get stuck without knowing how to answer, please direct them to the support form here: www.rehaish.com/support`
            },
            {
              role: 'user',
              content: messageIn 

            }
          ];
    
        // configure chat tools (first openAI call)
        const response = await openAI.chat.completions.create({
            model: 'gpt-3.5-turbo-0613',
            messages: context,
            tools: [
                {
                    type: 'function',
                    function: {
                        name: 'getTimeOfDay',
                        description: 'Get the time of day'
                    }
                },
                {
                    type: 'function',
                    function: {
                        name: 'getOrderStatus',
                        description: 'Returns the status of an order',
                        parameters: {
                            type: 'object',
                            properties: {
                                orderId: {
                                    type: 'string',
                                    description: 'The id of the order to get the status of'
                                }
                            },
                            required: ['orderId']
                        }
                    }
                },
                {
                    type: 'function',
                    function: {
                      name: 'getHostels',
                      description: 'Returns the lists of hostels in a location',
                      parameters: {
                        type: 'object',
                        properties: {
                          city: {
                            type: 'string',
                            description: 'The city name to get hostels from'
                          }
                        },
                        required: ['city']
                      }
                    }
                  }
            ],
            tool_choice: 'auto'// the engine will decide which tool to use
        });
        // decide if tool call is required  
        const willInvokeFunction = response.choices[0].finish_reason == 'tool_calls'
        
        
        if (willInvokeFunction) {
            const toolCall = response.choices[0].message.tool_calls[0]

            const toolName = toolCall.function.name
    
            if (toolName == 'getTimeOfDay') {
                const toolResponse = getTimeOfDay();
                context.push(response.choices[0].message);
                context.push({
                    role: 'tool',
                    content: toolResponse,
                    tool_call_id: toolCall.id
                })
            }
    
            if (toolName == 'getOrderStatus') {
                const rawArgument = toolCall.function.arguments;
                const parsedArguments = JSON.parse(rawArgument);
                const toolResponse = getOrderStatus(parsedArguments.orderId);
                context.push(response.choices[0].message);
                context.push({
                    role: 'tool',
                    content: toolResponse,
                    tool_call_id: toolCall.id
                })
            }
            if (toolName == 'getHostels') {
                const rawArgument = toolCall.function.arguments;
                const parsedArguments = JSON.parse(rawArgument);
                const toolResponse = await getHostels(parsedArguments.city);
                context.push(response.choices[0].message);
                context.push({
                    role: 'tool',
                    content: toolResponse,
                    tool_call_id: toolCall.id
                })
            }
        }
    
        const secondResponse = await openAI.chat.completions.create({
            model: 'gpt-3.5-turbo-0613',
            messages: context
        })
        const returnMessage = secondResponse.choices[0].message.content;
        console.log(returnMessage)
        return res.json({message: returnMessage});
    }
    
    callOpenAIWithTools(message)
    
    
    
    // decide if tool call is required
    // invoke the tool
    // make a second openAI call with the tool response


});


module.exports = router;