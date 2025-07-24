import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Camera, Save, Shield, Bell, CreditCard, LogOut } from "lucide-react";

const Perfil = () => {
  const [profileData, setProfileData] = useState({
    name: "Dr. João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    crm: "12345/SP",
    specialty: "Cardiologia",
    bio: "Cardiologista com 15 anos de experiência em medicina preventiva e tratamento de doenças cardiovasculares.",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const specialties = [
    "Clínica Geral",
    "Cardiologia",
    "Dermatologia",
    "Endocrinologia",
    "Ginecologia",
    "Neurologia",
    "Oftalmologia",
    "Ortopedia",
    "Pediatria",
    "Psiquiatria",
    "Urologia",
    "Outro"
  ];

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleNotificationUpdate = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
    toast({
      title: "Preferência atualizada",
      description: `Notificações ${field} ${value ? "ativadas" : "desativadas"}.`,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie suas informações pessoais e preferências da conta
        </p>
      </div>

      <Tabs defaultValue="perfil" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          <TabsTrigger value="plano">Plano</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Atualize suas informações de perfil e dados profissionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder.svg" alt="Foto do perfil" />
                      <AvatarFallback className="text-xl">
                        {profileData.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold">Foto do perfil</h3>
                    <p className="text-sm text-muted-foreground">
                      Clique no ícone da câmera para alterar sua foto
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crm">CRM</Label>
                    <Input
                      id="crm"
                      value={profileData.crm}
                      onChange={(e) => setProfileData(prev => ({ ...prev, crm: e.target.value }))}
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade</Label>
                  <Select value={profileData.specialty} onValueChange={(value) => setProfileData(prev => ({ ...prev, specialty: value }))}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-health-500 to-tech-500 hover:from-health-600 hover:to-tech-600"
                  disabled={isLoading}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Salvando..." : "Salvar alterações"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferências de Notificação
              </CardTitle>
              <CardDescription>
                Escolha como você deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    Receber notificações por email sobre novos leads e atualizações
                  </p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => handleNotificationUpdate("email", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS</p>
                  <p className="text-sm text-muted-foreground">
                    Receber alertas importantes via SMS
                  </p>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) => handleNotificationUpdate("sms", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push</p>
                  <p className="text-sm text-muted-foreground">
                    Notificações push no navegador
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => handleNotificationUpdate("push", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-sm text-muted-foreground">
                    Receber dicas, novidades e ofertas especiais
                  </p>
                </div>
                <Switch
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => handleNotificationUpdate("marketing", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Segurança da Conta
              </CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta e privacidade
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Alterar Senha</h4>
                  <Button variant="outline">
                    Alterar senha
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Autenticação de Dois Fatores</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Adicione uma camada extra de segurança à sua conta
                  </p>
                  <Button variant="outline">
                    Configurar 2FA
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2 text-destructive">Zona de Perigo</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                      Desativar conta
                    </Button>
                    <Button variant="destructive" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair da conta
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plano" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Plano Atual
              </CardTitle>
              <CardDescription>
                Gerencie sua assinatura e métodos de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-lg bg-accent/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Plano Profissional</h3>
                    <p className="text-muted-foreground">Acesso completo a todas as funcionalidades</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">R$ 97/mês</p>
                    <p className="text-sm text-muted-foreground">Próxima cobrança: 24/08/2024</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    Alterar plano
                  </Button>
                  <Button variant="outline">
                    Gerenciar pagamento
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Recursos inclusos:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Leads ilimitados</li>
                  <li>• Campanhas automatizadas</li>
                  <li>• Relatórios avançados</li>
                  <li>• Suporte prioritário</li>
                  <li>• Integração com WhatsApp</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Perfil;