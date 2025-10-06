/**
 * 🤖 BOT WHATSAPP - TCR FINANCE
 * Versão configurada e pronta para usar no REPLIT
 * 
 * ✅ JÁ CONFIGURADO COM SUAS INFORMAÇÕES!
 * 
 * PRÓXIMOS PASSOS:
 * 1. Faça upload no Replit
 * 2. Rode: npm install
 * 3. Rode: npm start
 * 4. Escaneie o QR Code
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const fs = require('fs');
const path = require('path');

// ========================================
// ✅ CONFIGURAÇÕES JÁ PREENCHIDAS
// ========================================

const CONFIG = {
    // Chave PIX Copia e Cola da TCR FINANCE
    PIX_KEY: "00020126580014BR.GOV.BCB.PIX013636df47d2-cbbf-42cd-a6ef-a2c09eb0cea45204000053039865802BR5916TCR FINANCE LTDA6008CURITIBA62200516caas436344xU1521630427C2",
    
    // Seu número do WhatsApp: (63) 98102-8933
    ADMIN_PHONE: "5563981028933@c.us",
    
    // Nome da empresa
    COMPANY_NAME: "TCR FINANCE",
    
    // Mensagem de boas-vindas
    WELCOME_MESSAGE: 
        `Olá! 👋 Bem-vindo à *TCR FINANCE*!\n\n` +
        `Para comprar USDT, siga os passos:\n\n` +
        `1️⃣ Faça o pagamento via PIX\n` +
        `2️⃣ Envie o comprovante aqui\n` +
        `3️⃣ Aguarde nossa confirmação\n` +
        `4️⃣ Receba seu USDT\n\n` +
        `💳 *Para pagar, copie o código PIX abaixo:*\n\n` +
        `\`\`\`00020126580014BR.GOV.BCB.PIX013636df47d2-cbbf-42cd-a6ef-a2c09eb0cea45204000053039865802BR5916TCR FINANCE LTDA6008CURITIBA62200516caas436344xU1521630427C2\`\`\`\n\n` +
        `📱 Ou use a chave: *TCR FINANCE LTDA*\n\n` +
        `Estamos online! 🟢`,
    
    // Mensagem ao receber comprovante
    RECEIPT_MESSAGE:
        `✅ *Comprovante recebido com sucesso!*\n\n` +
        `Estamos verificando seu pagamento.\n` +
        `Você será atendido em breve pela *TCR FINANCE*! ⏱️\n\n` +
        `Aguarde nossa confirmação...`,
    
    // Palavras que acionam a resposta automática
    TRIGGER_WORDS: ['oi', 'olá', 'ola', 'hello', 'ola', 'comprar', 'usdt', 'info', 'informação', 'preço', 'cotação']
};

// ========================================
// SERVIDOR EXPRESS (Mantém Replit ativo)
// ========================================

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bot WhatsApp - TCR FINANCE</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        max-width: 800px;
                        width: 100%;
                    }
                    h1 {
                        color: #25D366;
                        margin-bottom: 10px;
                        font-size: 2em;
                    }
                    .company {
                        color: #667eea;
                        font-size: 1.5em;
                        margin-bottom: 30px;
                        font-weight: bold;
                    }
                    .status {
                        padding: 15px 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                        font-size: 1.2em;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    .online {
                        background: #d4edda;
                        color: #155724;
                        border: 2px solid #28a745;
                    }
                    .offline {
                        background: #f8d7da;
                        color: #721c24;
                        border: 2px solid #dc3545;
                    }
                    .info-box {
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                        border-left: 4px solid #667eea;
                    }
                    .info-box h3 {
                        color: #667eea;
                        margin-bottom: 15px;
                    }
                    .info-item {
                        margin: 10px 0;
                        display: flex;
                        gap: 10px;
                    }
                    .info-label {
                        font-weight: bold;
                        color: #495057;
                        min-width: 120px;
                    }
                    .info-value {
                        color: #212529;
                        font-family: 'Courier New', monospace;
                        background: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        flex: 1;
                        word-break: break-all;
                    }
                    .instructions {
                        background: #fff3cd;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                        border-left: 4px solid #ffc107;
                    }
                    .instructions h3 {
                        color: #856404;
                        margin-bottom: 15px;
                    }
                    .instructions ol {
                        margin-left: 20px;
                        color: #856404;
                    }
                    .instructions li {
                        margin: 8px 0;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 30px;
                        color: #6c757d;
                        font-size: 0.9em;
                    }
                    .emoji {
                        font-size: 1.5em;
                    }
                    @media (max-width: 600px) {
                        .container {
                            padding: 20px;
                        }
                        h1 {
                            font-size: 1.5em;
                        }
                        .company {
                            font-size: 1.2em;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🤖 Bot WhatsApp</h1>
                    <div class="company">TCR FINANCE</div>
                    
                    <div class="status ${botReady ? 'online' : 'offline'}">
                        <span class="emoji">${botReady ? '🟢' : '🔴'}</span>
                        <span>Status: ${botReady ? 'ONLINE' : 'OFFLINE'}</span>
                    </div>
                    
                    <div class="info-box">
                        <h3>📊 Informações do Sistema</h3>
                        <div class="info-item">
                            <span class="info-label">Empresa:</span>
                            <span class="info-value">TCR FINANCE LTDA</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">WhatsApp Admin:</span>
                            <span class="info-value">(63) 98102-8933</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Servidor:</span>
                            <span class="info-value">Porta ${PORT}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Última Atualização:</span>
                            <span class="info-value">${new Date().toLocaleString('pt-BR')}</span>
                        </div>
                    </div>
                    
                    <div class="instructions">
                        <h3>📝 Como Usar</h3>
                        <ol>
                            <li>Verifique se o status está <strong>ONLINE</strong> (verde)</li>
                            <li>Se estiver offline, veja os logs no console do Replit</li>
                            <li>Clientes devem enviar "oi" para iniciar conversa</li>
                            <li>Bot responderá automaticamente com instruções de pagamento</li>
                            <li>Cliente envia comprovante, você recebe notificação</li>
                            <li>Você confirma manualmente e envia o USDT</li>
                        </ol>
                    </div>
                    
                    <div class="footer">
                        <p>Bot desenvolvido para TCR FINANCE</p>
                        <p><small>Versão 1.0 - Otimizado para Replit</small></p>
                    </div>
                </div>
            </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.json({
        status: botReady ? 'online' : 'offline',
        timestamp: new Date().toISOString(),
        company: 'TCR FINANCE LTDA',
        admin: '(63) 98102-8933'
    });
});

app.listen(PORT, () => {
    console.log(`\n🌐 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health\n`);
});

// Criar diretórios necessários
const RECEIPTS_DIR = path.join(__dirname, 'comprovantes');
if (!fs.existsSync(RECEIPTS_DIR)) {
    fs.mkdirSync(RECEIPTS_DIR, { recursive: true });
}

// Estado do bot
let botReady = false;

// Criar cliente WhatsApp
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: '.wwebjs_auth'
    }),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu',
            '--disable-extensions'
        ]
    }
});

// Funções auxiliares
async function notifyAdmin(message) {
    try {
        await client.sendMessage(CONFIG.ADMIN_PHONE, `🔔 *TCR FINANCE - NOTIFICAÇÃO*\n\n${message}`);
        console.log('📢 Admin notificado');
    } catch (error) {
        console.error('❌ Erro ao notificar admin:', error.message);
    }
}

async function downloadReceipt(message) {
    try {
        const media = await message.downloadMedia();
        if (!media) return null;
        
        const timestamp = Date.now();
        const phone = message.from.replace('@c.us', '');
        const extension = media.mimetype.split('/')[1] || 'jpg';
        const filename = `comprovante_${phone}_${timestamp}.${extension}`;
        const filepath = path.join(RECEIPTS_DIR, filename);
        
        fs.writeFileSync(filepath, media.data, 'base64');
        console.log(`💾 Comprovante salvo: ${filename}`);
        
        return { filename, filepath };
    } catch (error) {
        console.error('❌ Erro ao salvar comprovante:', error.message);
        return null;
    }
}

// Eventos do cliente
client.on('qr', (qr) => {
    console.log('\n' + '═'.repeat(60));
    console.log('🔐 ESCANEIE O QR CODE ABAIXO COM SEU WHATSAPP:');
    console.log('═'.repeat(60) + '\n');
    qrcode.generate(qr, { small: true });
    console.log('\n' + '═'.repeat(60));
    console.log('📱 COMO ESCANEAR:');
    console.log('   1. Abra o WhatsApp no celular (63) 98102-8933');
    console.log('   2. Vá em: Configurações > Aparelhos conectados');
    console.log('   3. Toque em "Conectar aparelho"');
    console.log('   4. Escaneie o código acima');
    console.log('═'.repeat(60) + '\n');
});

client.on('ready', () => {
    botReady = true;
    console.log('\n' + '🎉'.repeat(30));
    console.log('✅ BOT TCR FINANCE CONECTADO E FUNCIONANDO!');
    console.log('🎉'.repeat(30) + '\n');
    console.log('📊 Configurações:');
    console.log(`   🏢 Empresa: ${CONFIG.COMPANY_NAME}`);
    console.log(`   📱 Admin: (63) 98102-8933`);
    console.log(`   🌐 Interface: http://localhost:${PORT}`);
    console.log(`   💳 PIX: Configurado`);
    console.log('\n🤖 Aguardando mensagens de clientes...\n');
});

client.on('authenticated', () => {
    console.log('✅ Autenticado com sucesso!');
});

client.on('auth_failure', (msg) => {
    botReady = false;
    console.error('❌ Falha na autenticação:', msg);
    console.log('\n💡 SOLUÇÃO:');
    console.log('   1. Pare o bot (Ctrl+C)');
    console.log('   2. Delete a pasta .wwebjs_auth');
    console.log('   3. Reinicie o bot (npm start)\n');
});

client.on('disconnected', (reason) => {
    botReady = false;
    console.log('⚠️ Bot desconectado:', reason);
    console.log('🔄 Tentando reconectar...\n');
});

client.on('message', async (message) => {
    try {
        const phone = message.from;
        const text = message.body?.trim() || '';
        const textLower = text.toLowerCase();
        
        // Ignorar grupos e mensagens próprias
        if (phone.includes('@g.us') || message.fromMe) {
            return;
        }
        
        console.log(`\n📨 NOVA MENSAGEM:`);
        console.log(`   👤 De: ${phone}`);
        console.log(`   💬 Texto: ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`);
        
        // Responder mensagens de texto
        if (message.type === 'chat' && text) {
            const hasKeyword = CONFIG.TRIGGER_WORDS.some(word => 
                textLower.includes(word)
            );
            
            if (hasKeyword) {
                await message.reply(CONFIG.WELCOME_MESSAGE);
                console.log(`   ✅ Mensagem de boas-vindas enviada\n`);
            }
        }
        
        // Processar comprovantes
        if (message.hasMedia) {
            console.log(`   📸 Comprovante detectado`);
            
            // Responder imediatamente
            await message.reply(CONFIG.RECEIPT_MESSAGE);
            console.log(`   ✅ Confirmação enviada ao cliente`);
            
            // Baixar e salvar
            const receipt = await downloadReceipt(message);
            
            if (receipt) {
                // Notificar admin
                const notification = 
                    `*🆕 NOVO COMPROVANTE RECEBIDO*\n\n` +
                    `👤 *Cliente:* ${phone}\n` +
                    `📁 *Arquivo:* ${receipt.filename}\n` +
                    `📂 *Localização:* comprovantes/\n` +
                    `⏰ *Horário:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                    `⚠️ *AÇÃO NECESSÁRIA:*\n` +
                    `1️⃣ Abra o comprovante no Replit\n` +
                    `2️⃣ Verifique se o pagamento foi feito\n` +
                    `3️⃣ Confirme o valor\n` +
                    `4️⃣ Responda o cliente manualmente\n` +
                    `5️⃣ Envie o USDT após confirmação`;
                
                await notifyAdmin(notification);
                console.log(`   ✅ Você foi notificado no WhatsApp\n`);
            } else {
                console.log(`   ❌ Falha ao processar comprovante\n`);
            }
        }
        
    } catch (error) {
        console.error('❌ Erro ao processar mensagem:', error.message);
    }
});

// Tratamento de erros
process.on('unhandledRejection', (error) => {
    console.error('❌ Erro não tratado:', error);
});

// Iniciar bot
console.log('\n' + '🚀'.repeat(30));
console.log('INICIANDO BOT WHATSAPP - TCR FINANCE');
console.log('🚀'.repeat(30) + '\n');
console.log('⚠️  AVISO: Este bot viola os Termos de Serviço do WhatsApp');
console.log('⚠️  Existe risco de banimento permanente da sua conta');
console.log('⚠️  Use por sua conta e risco\n');
console.log('📋 Configurações:');
console.log(`   🏢 Empresa: TCR FINANCE LTDA`);
console.log(`   📱 WhatsApp: (63) 98102-8933`);
console.log(`   💳 PIX: Configurado (Copia e Cola)`);
console.log(`   🌐 Servidor: Porta ${PORT}\n`);
console.log('⏳ Inicializando cliente WhatsApp...\n');

client.initialize();
