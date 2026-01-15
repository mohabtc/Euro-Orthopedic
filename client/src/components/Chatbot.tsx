import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

interface ChatMessage {
  id: string;
  type: "text" | "buttons" | "carousel" | "card" | "video" | "form" | "success" | "typing";
  content: any;
  isBot: boolean;
}

interface ConversationContext {
  userName?: string;
  userPhone?: string;
  privacyAccepted?: boolean;
  message?: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [context, setContext] = useState<ConversationContext>({});
  const [currentFormStep, setCurrentFormStep] = useState<string>("");
  const [formValue, setFormValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        handleAction("welcome");
        
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const chatMutation = useMutation({
    mutationFn: async ({ action, context }: { action: string; context?: ConversationContext }) => {
      const response = await apiRequest("POST", "/api/leo-chat", { action, context });
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      setMessages((prev) => prev.filter((msg) => msg.type !== "typing"));
      
      if (data.messages && Array.isArray(data.messages)) {
        const newMessages: ChatMessage[] = data.messages.map((msg: any, idx: number) => ({
          id: `${Date.now()}-${idx}`,
          type: msg.type,
          content: msg.content,
          isBot: true,
        }));
        
        setMessages((prev) => [...prev, ...newMessages]);
      }
    },
    onError: () => {
      setMessages((prev) => prev.filter((msg) => msg.type !== "typing"));
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "text",
          content: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.",
          isBot: true,
        },
      ]);
    },
  });

  const handleAction = (action: string, customContext?: ConversationContext) => {
    const typingMessage: ChatMessage = {
      id: `typing-${Date.now()}`,
      type: "typing",
      content: "",
      isBot: true,
    };
    setMessages((prev) => [...prev, typingMessage]);
    chatMutation.mutate({ action, context: customContext || context });
  };

  const handleButtonClick = (buttonId: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "text",
      content: messages.find((m) => m.type === "buttons")?.content.find((b: any) => b.id === buttonId)?.label || buttonId,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);
    handleAction(buttonId);
  };

  const handleFormSubmit = (step: string) => {
    if (step === "name") {
      if (!formValue.trim() || formValue.length < 2) return;
      
      const newContext = { ...context, userName: formValue };
      setContext(newContext);
      
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        type: "text",
        content: formValue,
        isBot: false,
      };
      setMessages((prev) => [...prev, userMessage]);
      
      setFormValue("");
      handleAction("form_submit_name", newContext);
    } else if (step === "phone") {
      if (!formValue.trim() || formValue.length < 9) return;
      
      const newContext = { ...context, userPhone: formValue };
      setContext(newContext);
      
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        type: "text",
        content: formValue,
        isBot: false,
      };
      setMessages((prev) => [...prev, userMessage]);
      
      setFormValue("");
      handleAction("form_submit_phone", newContext);
    } else if (step === "privacy") {
      if (!context.privacyAccepted) return;
      handleAction("form_submit_complete", context);
    }
  };

  const handlePrivacyChange = (checked: boolean) => {
    setContext((prev) => ({ ...prev, privacyAccepted: checked }));
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "text",
      content: inputValue,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);

    const typingMessage: ChatMessage = {
      id: `typing-${Date.now()}`,
      type: "typing",
      content: "",
      isBot: true,
    };
    setMessages((prev) => [...prev, typingMessage]);

    chatMutation.mutate({ 
      action: "user_message", 
      context: { ...context, message: inputValue } 
    });

    setInputValue("");
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      handleAction("welcome");
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 w-[340px] max-h-[520px] bg-white rounded-3xl shadow-2xl border border-euro-text/10 z-[9999] flex flex-col overflow-hidden animate-[scaleIn_0.3s_cubic-bezier(0.4,0,0.2,1)]"
          data-testid="chatbot-window"
        >
          <div className="flex items-center gap-3 p-4 border-b border-euro-text/5 bg-[#FAFAFA] rounded-t-3xl flex-shrink-0">
            <Avatar className="h-10 w-10 border-2 border-euro-blue/20">
              <AvatarImage src="https://i.imgur.com/oMSuMzQ.png" alt="Leo" />
              <AvatarFallback className="bg-euro-blue text-white font-semibold text-base">
                L
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-euro-text text-sm" data-testid="text-leo-name">
                Leo
              </h3>
              <p className="text-[12px] text-[#86868b]" data-testid="text-leo-title">
                Especialista de Producto
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 rounded-full hover:bg-euro-text/5 transition-all duration-300"
              data-testid="button-close-chat"
            >
              <X className="h-5 w-5 text-euro-text/60" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4 bg-white overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <MessageRenderer
                  key={message.id}
                  message={message}
                  onButtonClick={handleButtonClick}
                  onFormSubmit={handleFormSubmit}
                  formValue={formValue}
                  setFormValue={setFormValue}
                  setCurrentFormStep={setCurrentFormStep}
                  currentFormStep={currentFormStep}
                  context={context}
                  onPrivacyChange={handlePrivacyChange}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-euro-text/5 bg-white rounded-b-3xl flex-shrink-0">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 border-euro-text/20 rounded-full h-10 px-4 text-[14px] focus-visible:ring-euro-blue"
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="bg-euro-blue hover:bg-euro-blue/90 rounded-full h-10 w-10 shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0"
                data-testid="button-send-message"
              >
                {chatMutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                ) : (
                  <Send className="h-4 w-4 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#0066cc] hover:bg-[#0066cc]/90 shadow-2xl z-[9999] transition-all duration-500 hover:scale-110 animate-pulse-shadow flex items-center justify-center"
          data-testid="button-open-chat"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}
    </>
  );
}

interface MessageRendererProps {
  message: ChatMessage;
  onButtonClick: (buttonId: string) => void;
  onFormSubmit: (step: string) => void;
  formValue: string;
  setFormValue: (value: string) => void;
  setCurrentFormStep: (step: string) => void;
  currentFormStep: string;
  context: ConversationContext;
  onPrivacyChange: (checked: boolean) => void;
}

function MessageRenderer({
  message,
  onButtonClick,
  onFormSubmit,
  formValue,
  setFormValue,
  setCurrentFormStep,
  currentFormStep,
  context,
  onPrivacyChange,
}: MessageRendererProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (message.type === "form") {
      setCurrentFormStep(message.content.step);
    }
  }, [message, setCurrentFormStep]);

  if (message.type === "typing") {
    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid="typing-indicator">
        <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-[#F4F7F9]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-euro-text/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-euro-text/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-euro-text/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    );
  }

  if (message.type === "text" || message.type === "success") {
    return (
      <div
        className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-[fadeInUp_0.3s_ease-out]`}
        data-testid={message.isBot ? "message-bot" : "message-user"}
      >
        <div
          className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
            message.isBot
              ? "bg-[#F4F7F9] text-[#1d1d1f]"
              : "bg-[#0066cc] text-white"
          } ${message.type === "success" ? "border-2 border-green-500/20" : ""}`}
        >
          <p className="text-[14px] leading-relaxed whitespace-pre-line">{message.content}</p>
          {message.type === "success" && (
            <CheckCircle2 className="inline-block ml-2 h-4 w-4 text-green-600" />
          )}
        </div>
      </div>
    );
  }

  if (message.type === "buttons") {
    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid="message-buttons">
        <div className="flex flex-col gap-2 w-full max-w-[90%]">
          {message.content.map((button: any) => (
            <Button
              key={button.id}
              onClick={() => onButtonClick(button.id)}
              variant="outline"
              className="justify-start text-[#0066cc] border-[#e5e5ea] hover:bg-[#F4F7F9] rounded-full h-auto py-2.5 px-4 text-[14px] font-normal transition-all duration-300"
              data-testid={`button-quick-reply-${button.id}`}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (message.type === "carousel") {
    const items = message.content;
    const currentItem = items[carouselIndex];

    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid="message-carousel">
        <div className="w-full max-w-[95%]">
          <Card className="overflow-hidden border-euro-text/10 shadow-md">
            <div className="relative">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h4 className="font-semibold text-base mb-0.5">{currentItem.title}</h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[13px] text-euro-text/80 mb-3 leading-relaxed">
                {currentItem.description}
              </p>
              <Button
                onClick={() => onButtonClick(currentItem.buttonAction)}
                className="w-full bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full h-9 text-[13px] font-semibold"
                data-testid={`button-carousel-${currentItem.id}`}
              >
                {currentItem.buttonText}
              </Button>
            </div>
          </Card>
          
          {items.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setCarouselIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))}
                className="h-8 w-8 rounded-full border-euro-text/20"
                data-testid="button-carousel-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-1.5">
                {items.map((_: any, idx: number) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === carouselIndex ? "w-5 bg-euro-blue" : "w-1.5 bg-euro-text/20"
                    }`}
                  />
                ))}
              </div>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setCarouselIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))}
                className="h-8 w-8 rounded-full border-euro-text/20"
                data-testid="button-carousel-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (message.type === "card") {
    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid="message-card">
        <Card className="w-full max-w-[90%] border-euro-blue/20 shadow-md bg-gradient-to-br from-white to-blue-50/30">
          <div className="p-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-full bg-euro-blue/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-euro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-base text-euro-text">{message.content.title}</h4>
                <p className="text-[12px] text-euro-blue font-medium">{message.content.subtitle}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              {message.content.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-[13px] text-euro-text">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-[12px] text-euro-text/70 leading-relaxed border-t border-euro-text/10 pt-3">
              {message.content.footer}
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (message.type === "video") {
    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid="message-video">
        <div className="w-full max-w-[95%]">
          <Card className="overflow-hidden border-euro-text/10 shadow-md">
            <video
              controls
              className="w-full"
              src={message.content.url}
            >
              Tu navegador no soporta el elemento de video.
            </video>
            {message.content.description && (
              <div className="p-3 bg-[#FAFAFA]">
                <p className="text-[12px] text-euro-text/70">{message.content.description}</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }

  if (message.type === "form") {
    const step = message.content.step;

    return (
      <div className="flex justify-start animate-[fadeInUp_0.3s_ease-out]" data-testid={`message-form-${step}`}>
        <div className="w-full max-w-[90%]">
          {message.content.question && (
            <div className="mb-2.5">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-[#F4F7F9] text-[#1d1d1f]">
                <p className="text-[14px] leading-relaxed">{message.content.question}</p>
              </div>
            </div>
          )}
          
          <Card className="p-4 border-euro-text/10 shadow-sm">
            {step === "name" && (
              <div className="space-y-3">
                <Input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && onFormSubmit("name")}
                  placeholder="Tu nombre"
                  className="border-euro-text/20 rounded-xl h-10 text-[14px]"
                  data-testid="input-form-name"
                  autoFocus
                />
                <Button
                  onClick={() => onFormSubmit("name")}
                  disabled={!formValue.trim() || formValue.length < 2}
                  className="w-full bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full h-9 text-[13px] font-semibold"
                  data-testid="button-submit-name"
                >
                  Continuar
                </Button>
              </div>
            )}
            
            {step === "phone" && (
              <div className="space-y-3">
                <Input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && onFormSubmit("phone")}
                  placeholder="+34 600 000 000"
                  type="tel"
                  className="border-euro-text/20 rounded-xl h-10 text-[14px]"
                  data-testid="input-form-phone"
                  autoFocus
                />
                <Button
                  onClick={() => onFormSubmit("phone")}
                  disabled={!formValue.trim() || formValue.length < 9}
                  className="w-full bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full h-9 text-[13px] font-semibold"
                  data-testid="button-submit-phone"
                >
                  Continuar
                </Button>
              </div>
            )}
            
            {step === "privacy" && (
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 p-3 bg-[#F4F7F9] rounded-xl">
                  <Checkbox
                    id="privacy"
                    checked={context.privacyAccepted || false}
                    onCheckedChange={onPrivacyChange}
                    className="mt-0.5"
                    data-testid="checkbox-privacy"
                  />
                  <label htmlFor="privacy" className="text-[13px] text-euro-text/80 leading-relaxed cursor-pointer">
                    Acepto la{" "}
                    <Link href="/privacidad" className="text-euro-blue underline">
                      Política de Privacidad
                    </Link>{" "}
                    y recibir esta llamada.
                  </label>
                </div>
                <Button
                  onClick={() => onFormSubmit("privacy")}
                  disabled={!context.privacyAccepted}
                  className="w-full bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full h-9 text-[13px] font-semibold"
                  data-testid="button-submit-privacy"
                >
                  Confirmar
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }

  return null;
}
