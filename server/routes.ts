import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          error: "Validation failed",
          details: validationResult.error.issues,
        });
      }

      const { privacyAccepted, ...submissionData } = validationResult.data;

      const submission = await storage.createContactSubmission(submissionData);
      
      return res.status(201).json({
        success: true,
        data: submission,
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.json({
        success: true,
        data: submissions,
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  // Leo chatbot visual conversation endpoint
  app.post("/api/leo-chat", async (req, res) => {
    try {
      const { action, context } = req.body;
      
      if (!action || typeof action !== "string") {
        return res.status(400).json({
          error: "Action is required",
        });
      }

      const messages: any[] = [];

      // Main menu buttons
      const mainMenuButtons = [
        { id: "features", label: "Características Principales" },
        { id: "pricing", label: "Precio y Oferta del Pack" },
        { id: "shipping", label: "Envío y Garantía" },
        { id: "call", label: "Solicitar una llamada" },
      ];

      // Handle different actions
      if (action === "welcome") {
        messages.push({
          type: "text",
          content: "Hola. Soy Leo, tu especialista de producto. Estoy aquí para ayudarte a descubrir cómo la OrthoCarbon Pro I puede cambiar tu movilidad.\n\n¿Qué te gustaría explorar primero?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "main_menu") {
        messages.push({
          type: "text",
          content: "¿Qué te gustaría explorar primero?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "user_message") {
        // Handle free text input from user
        const userMessage = context?.message || "";
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for specific keywords
        const keywords: Record<string, string> = {
          "peso": "La OrthoCarbon Pro I pesa solo 9.8 kg, lo que la hace extremadamente fácil de transportar y manejar.",
          "carbon": "Está fabricada con fibra de carbono aeroespacial, el mismo material usado en la Fórmula 1, ofreciendo máxima resistencia con mínimo peso.",
          "plegar": "Se pliega en solo 3 segundos con un mecanismo intuitivo, perfecta para coches, taxis y aviones.",
          "batería": "La batería tiene una autonomía de hasta 35 km y se carga completamente en 4-6 horas.",
          "precio": "Para conocer el precio exacto y opciones personalizadas, lo mejor es que hables con un especialista. ¿Te gustaría que te llamáramos?",
          "garantía": "Ofrecemos 2 años de garantía completa en el chasis y los motores, y 6 meses en la batería.",
          "envío": "El envío es totalmente gratuito a toda la península y recibes tu silla lista para usar en 48 horas.",
        };
        
        let foundKeyword = false;
        for (const [key, value] of Object.entries(keywords)) {
          if (lowerMessage.includes(key)) {
            messages.push({
              type: "text",
              content: value,
            });
            messages.push({
              type: "text",
              content: "¿Puedo ayudarte con algo más?",
            });
            messages.push({
              type: "buttons",
              content: mainMenuButtons,
            });
            foundKeyword = true;
            break;
          }
        }
        
        // If no keyword match, check if it's a complex question or gibberish
        if (!foundKeyword) {
          if (userMessage.length < 3 || !/[a-záéíóúñ]/i.test(userMessage)) {
            // Gibberish or too short
            messages.push({
              type: "text",
              content: "Vaya, no he entendido bien esa parte. ¿Podrías reformularlo?\n\nO, si lo prefieres, puedo ayudarte con uno de estos temas:",
            });
            messages.push({
              type: "buttons",
              content: mainMenuButtons,
            });
          } else {
            // Complex question
            messages.push({
              type: "text",
              content: "Esa es una excelente pregunta que merece una respuesta detallada. El peso y la fibra de carbono son nuestras grandes ventajas.\n\nEl especialista que te llame puede hacerte una comparativa técnica punto por punto. ¿Te parece bien si agendamos esa llamada gratuita?",
            });
            messages.push({
              type: "buttons",
              content: [
                { id: "call", label: "Sí, agendar la llamada" },
                { id: "main_menu", label: "No, tengo otra pregunta" },
              ],
            });
          }
        }
      } else if (action === "features") {
        messages.push({
          type: "text",
          content: "La OrthoCarbon Pro I se define por tres innovaciones clave. Puedes explorar la que prefieras:",
        });
        messages.push({
          type: "carousel",
          content: [
            {
              id: "feature-1",
              title: "Ultraligera (9.8 kg)",
              description: "Pesa solo 9.8 kg gracias a su chasis de fibra de carbono. Se levanta con una mano.",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
              buttonText: "Ver vídeo de peso",
              buttonAction: "video_weight",
            },
            {
              id: "feature-2",
              title: "Plegado en 3 Segundos",
              description: "Se pliega de forma intuitiva en 3 segundos para caber en cualquier maletero.",
              image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&q=80",
              buttonText: "Ver vídeo de plegado",
              buttonAction: "video_fold",
            },
            {
              id: "feature-3",
              title: "Batería y Motores",
              description: "Motores duales silenciosos y opciones de batería para hasta 35 km de autonomía.",
              image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
              buttonText: "Ver opciones de batería",
              buttonAction: "battery_options",
            },
          ],
        });
        messages.push({
          type: "text",
          content: "¿Sobre qué más te gustaría informarte?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "video_fold" || action === "video_weight") {
        messages.push({
          type: "text",
          content: "Claro. Observa lo sencillo que es:",
        });
        messages.push({
          type: "video",
          content: {
            url: "https://euroorthopedic.com/videos/demo.mp4",
            description: action === "video_fold" ? "Proceso de plegado en 3 segundos" : "Ligereza extrema de 9.8 kg",
          },
        });
        messages.push({
          type: "text",
          content: "¿Sobre qué más te gustaría informarte?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "battery_options") {
        messages.push({
          type: "text",
          content: "Ofrecemos dos opciones de batería:\n\n• Batería Estándar (20 km de autonomía)\n• Batería Extendida (35 km de autonomía)\n\nAmbas opciones se cargan completamente en 4-6 horas.",
        });
        messages.push({
          type: "text",
          content: "¿Sobre qué más te gustaría informarte?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "pricing") {
        messages.push({
          type: "text",
          content: "Nuestra estrategia no es la venta directa, sino el asesoramiento experto.\n\nAl solicitar una llamada gratuita, te damos acceso al 'Pack Libertad Total' (valorado en 317€) y gestionamos contigo la reducción del IVA al 4% si dispones del certificado.",
        });
        messages.push({
          type: "card",
          content: {
            title: "Pack Libertad Total",
            subtitle: "Gratis con tu llamada",
            items: [
              "Cojín Ergonómico",
              "Bolsa de Transporte",
              "Segundo Cargador",
            ],
            footer: "Un especialista te llamará para confirmar el precio final con tu IVA aplicado y sin compromiso.",
          },
        });
        messages.push({
          type: "buttons",
          content: [
            { id: "call", label: "Solicitar la llamada ahora" },
            { id: "main_menu", label: "Tengo más preguntas" },
          ],
        });
      } else if (action === "shipping") {
        messages.push({
          type: "text",
          content: "Claro. Te lo resumo:\n\n• Envío: Totalmente gratuito a toda la península. Recibes tu silla lista para usar en 48 horas.\n\n• Garantía: Tienes 2 años de garantía total en el chasis y los motores, y 6 meses en la batería. Cero preocupaciones.\n\n¿Puedo ayudarte con algo más?",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      } else if (action === "call") {
        messages.push({
          type: "text",
          content: "Perfecto. Es la mejor decisión. Un especialista resolverá todas tus dudas sin compromiso.",
        });
        messages.push({
          type: "form",
          content: {
            step: "name",
            question: "Por favor, facilítame tu nombre:",
          },
        });
      } else if (action === "form_submit_name") {
        const userName = context?.userName;
        messages.push({
          type: "text",
          content: `Gracias, ${userName}.`,
        });
        messages.push({
          type: "form",
          content: {
            step: "phone",
            question: "Ahora, ¿cuál es tu número de teléfono? (Lo usaremos solo para esta llamada de asesoramiento).",
          },
        });
      } else if (action === "form_submit_phone") {
        messages.push({
          type: "text",
          content: "¡Último paso! Solo necesito tu confirmación para que podamos contactarte.",
        });
        messages.push({
          type: "form",
          content: {
            step: "privacy",
            question: "",
          },
        });
      } else if (action === "form_submit_complete") {
        const userName = context?.userName;
        const userPhone = context?.userPhone;
        
        if (userName && userPhone) {
          await storage.createContactSubmission({ name: userName, phone: userPhone });
        }
        
        messages.push({
          type: "success",
          content: `¡Todo listo, ${userName}!\n\nUn especialista de Euro Orthopedic te llamará muy pronto (normalmente en menos de 24h laborables).\n\nGracias por tu confianza.`,
        });
      } else {
        messages.push({
          type: "text",
          content: "Vaya, no he entendido bien esa parte. ¿Podrías reformularlo?\n\nO, si lo prefieres, puedo ayudarte con uno de estos temas:",
        });
        messages.push({
          type: "buttons",
          content: mainMenuButtons,
        });
      }

      return res.json({
        success: true,
        messages,
      });
    } catch (error) {
      console.error("Error processing Leo chat:", error);
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
