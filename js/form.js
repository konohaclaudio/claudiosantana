/**
 * Contact Form Handler
 *
 * Usa o endpoint AJAX do FormSubmit.co (/ajax/EMAIL) que retorna JSON,
 * permitindo feedback inline sem redirecionar a página.
 *
 * Por que fetch em vez de jQuery.ajax:
 * - Fetch é nativo, sem dependência extra
 * - FormSubmit AJAX requer Content-Type: application/json
 * - jQuery.ajax + serialize() envia form-urlencoded, que o endpoint AJAX
 *   do FormSubmit não processa corretamente
 */
document.addEventListener('DOMContentLoaded', () => {

    const form     = document.getElementById('ajax-contact');
    const messages = document.getElementById('form-messages');

    if (!form || !messages) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('[type="submit"]');

        // Feedback visual imediato: desabilita o botão para evitar duplo envio
        btn.disabled    = true;
        btn.textContent = 'Enviando...';
        messages.textContent = '';
        messages.className   = '';

        // Coleta os campos do formulário
        const payload = {
            name:     form.querySelector('[name="name"]').value.trim(),
            email:    form.querySelector('[name="_replyto"]').value.trim(),
            message:  form.querySelector('[name="message"]').value.trim(),
            _subject: 'Novo contato pelo portfólio — Claudio Santana',
        };

        try {
            const response = await fetch(form.action, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':       'application/json',
                },
                body: JSON.stringify(payload),
            });

            // FormSubmit retorna { success: "true" } em caso de sucesso
            const json = await response.json();

            if (json.success === 'true' || json.success === true) {
                messages.textContent = 'Mensagem enviada! Retornarei em breve.';
                messages.className   = 'form-success';
                form.reset();
            } else {
                // Resposta inesperada do servidor (não é erro de rede)
                throw new Error('Resposta inesperada do servidor');
            }

        } catch {
            // Cobre erros de rede, timeout e respostas inválidas
            messages.textContent = 'Não foi possível enviar. Tente pelo WhatsApp ou email direto.';
            messages.className   = 'form-error';
        } finally {
            // Sempre reabilita o botão, independente do resultado
            btn.disabled    = false;
            btn.textContent = 'Enviar Contato';
        }
    });

});
