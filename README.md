# 🤖 Bot WhatsApp - TCR FINANCE

Bot configurado e pronto para usar no **Replit**!

---

## ✅ JÁ ESTÁ CONFIGURADO!

Todas as suas informações já estão no código:

- ✅ **PIX Copia e Cola:** Configurado
- ✅ **WhatsApp:** (63) 98102-8933
- ✅ **Empresa:** HARDDY COMPANY
- ✅ **Mensagens:** Personalizadas

**Você NÃO precisa editar nada!**

---

## 🚀 COMO USAR (3 PASSOS)

### 1️⃣ Upload no Replit

1. Acesse: **https://replit.com/**
2. Faça login
3. Clique: **"+ Create Repl"**
4. Escolha: **"Node.js"**
5. **Arraste** todos os arquivos para o Replit

### 2️⃣ Instalar

No **Shell** do Replit (painel inferior), digite:

```bash
npm install
```

Aguarde 1-2 minutos.

### 3️⃣ Rodar

No **Shell**, digite:

```bash
npm start
```

Ou clique no botão verde **"Run"**!

**QR Code** vai aparecer! Escaneie com o WhatsApp **(63) 98102-8933**

---

## 📱 Escanear QR Code

1. Pegue o celular **(63) 98102-8933**
2. Abra **WhatsApp**
3. Vá em: **Configurações** > **Aparelhos conectados**
4. Toque: **"Conectar aparelho"**
5. **Escaneie** o QR Code que apareceu no Shell

✅ **Pronto! Bot conectado!**

---

## 🌐 Interface Web

Após iniciar, clique em **"Open website"** no Replit.

Você verá:
- 🟢 Status do bot (Online/Offline)
- 📊 Informações da TCR FINANCE
- 📝 Instruções de uso

---

## 💬 Como Funciona

**Cliente envia:**
```
Oi
```

**Bot responde automaticamente:**
```
Olá! 👋 Bem-vindo à TCR FINANCE!

Para comprar USDT, siga os passos:

1️⃣ Faça o pagamento via PIX
2️⃣ Envie o comprovante aqui
3️⃣ Aguarde nossa confirmação
4️⃣ Receba seu USDT

💳 Para pagar, copie o código PIX abaixo:

00020126580014BR.GOV.BCB.PIX013636df47d2-cbbf-42cd-a6ef-a2c09eb0cea45204000053039865802BR5916TCR FINANCE LTDA6008CURITIBA62200516caas436344xU1521630427C2

📱 Ou use a chave: TCR FINANCE LTDA

Estamos online! 🟢
```

**Cliente envia foto do comprovante:**

**Bot responde:**
```
✅ Comprovante recebido com sucesso!

Estamos verificando seu pagamento.
Você será atendido em breve pela TCR FINANCE! ⏱️

Aguarde nossa confirmação...
```

**VOCÊ recebe notificação no WhatsApp (63) 98102-8933:**
```
🔔 TCR FINANCE - NOTIFICAÇÃO

🆕 NOVO COMPROVANTE RECEBIDO

👤 Cliente: 5511999999999@c.us
📁 Arquivo: comprovante_5511999999999_1696435200000.jpg
📂 Localização: comprovantes/
⏰ Horário: 04/10/2025 15:30:45

⚠️ AÇÃO NECESSÁRIA:
1️⃣ Abra o comprovante no Replit
2️⃣ Verifique se o pagamento foi feito
3️⃣ Confirme o valor
4️⃣ Responda o cliente manualmente
5️⃣ Envie o USDT após confirmação
```

---

## 📸 Ver Comprovantes

**No Replit:**
1. Painel **"Files"** (esquerda)
2. Abra pasta **`comprovantes/`**
3. Clique na imagem para visualizar

---

## 🔄 Manter Online 24/7

### Opção 1: Deploy (Recomendado)
1. Clique em **"Deploy"** (topo)
2. Escolha **"Autoscale deployment"**
3. Clique **"Deploy"**

### Opção 2: Always On
1. Clique em **Settings** (engrenagem)
2. Ative **"Always On"**

---

## 🐛 Problemas?

### QR Code não aparece
```bash
# Pare o bot
Ctrl+C

# Delete sessão
rm -rf .wwebjs_auth

# Reinicie
npm start
```

### Bot desconecta
- Ative **"Always On"** ou faça **Deploy**
- Verifique se o trial está ativo

### Erro ao instalar
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 💰 Custos

| Período | Valor |
|---------|-------|
| **Trial (7 dias)** | **GRÁTIS** 🎉 |
| **Replit Core** | $20/mês (~R$ 100) |

---

## ✅ Checklist

- [ ] Fiz upload no Replit
- [ ] Rodei `npm install`
- [ ] Rodei `npm start`
- [ ] Escaneei QR Code com (63) 98102-8933
- [ ] Bot conectou (mensagem de sucesso)
- [ ] Ativei **Always On** ou fiz **Deploy**
- [ ] Testei enviando "oi" para o bot
- [ ] Recebi resposta automática

---

## 📋 Comandos Úteis

```bash
# Instalar
npm install

# Iniciar
npm start

# Parar
Ctrl+C

# Limpar sessão
rm -rf .wwebjs_auth

# Reinstalar
rm -rf node_modules
npm install
```

---

## 📊 Informações Configuradas

- **Empresa:** TCR FINANCE LTDA
- **WhatsApp:** (63) 98102-8933
- **Localização:** Curitiba
- **PIX:** Copia e Cola configurado
- **Palavras-chave:** oi, olá, comprar, usdt, info, preço, cotação

---

## 🎯 Diferenças desta Versão

✅ **Já configurada** com suas informações
✅ **Servidor Express** integrado
✅ **Interface web** bonita e profissional
✅ **Logs detalhados** e organizados
✅ **Notificações completas** para você
✅ **Mensagens personalizadas** para TCR FINANCE

---

## 🎉 Pronto para Usar!

Tudo já está configurado! É só:

1. Upload no Replit
2. `npm install`
3. `npm start`
4. Escanear QR Code

**Tempo total: 5-10 minutos**

---

## 📞 Configurações

Todas as configurações estão no início do arquivo `index.js`:

```javascript
const CONFIG = {
    PIX_KEY: "00020126580014BR.GOV.BCB.PIX...",
    ADMIN_PHONE: "5563981028933@c.us",
    COMPANY_NAME: "TCR FINANCE",
    WELCOME_MESSAGE: "...",
    RECEIPT_MESSAGE: "...",
    TRIGGER_WORDS: [...]
};
```

Se quiser mudar algo, edite lá!

---

## 🚀 Começar Agora!

1. Acesse: **https://replit.com/**
2. Crie projeto Node.js
3. Faça upload dos arquivos
4. `npm install`
5. `npm start`
6. Escaneie QR Code

**Simples assim!** 🎉

---

**TCR FINANCE - Bot WhatsApp para Vendas de USDT**

*Versão 1.0 - Configurada e pronta para usar!*
