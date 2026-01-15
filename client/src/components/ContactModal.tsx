import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitSuccess: (name: string) => void;
}

export default function ContactModal({ open, onOpenChange, onSubmitSuccess }: ContactModalProps) {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      phone: "",
      privacyAccepted: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (_, variables) => {
      form.reset();
      onSubmitSuccess(variables.name);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar la solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-3xl animate-[modalSlideIn_0.3s_cubic-bezier(0.4,0,0.2,1)] border-euro-text/10">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-euro-text tracking-[-0.01em]" data-testid="text-modal-title">
            Estás a un paso.
          </DialogTitle>
          <DialogDescription className="text-euro-text/70 text-[16px] leading-relaxed mb-2" data-testid="text-modal-description">
            Déjanos tu nombre y teléfono y un especialista te llamará para confirmar tu Pack Libertad y resolver todas tus dudas, sin compromiso.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-euro-text font-medium">Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Tu nombre"
                      className="border-euro-text/20 rounded-xl h-12 text-[16px] focus:border-euro-blue transition-all duration-300"
                      data-testid="input-nombre"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-euro-text font-medium">Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="+34 600 000 000"
                      className="border-euro-text/20 rounded-xl h-12 text-[16px] focus:border-euro-blue transition-all duration-300"
                      data-testid="input-telefono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                      data-testid="checkbox-privacidad"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-[15px] text-euro-text/70 font-normal">
                      Acepto la{" "}
                      <Link href="/privacidad" className="text-euro-blue hover:underline font-medium" data-testid="link-privacidad">
                        Política de Privacidad
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-euro-blue hover:bg-euro-blue/90 text-white rounded-full h-12 font-semibold text-[16px] shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-enviar"
            >
              {submitMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar y recibir llamada"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
