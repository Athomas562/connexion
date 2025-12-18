const input = document.querySelector('.test');
        const button = document.querySelector('button');

        button.addEventListener('click', async function() {
            const valeur = input.value;
            
            if (valeur.trim() === '') {
                alert('Tape quelque chose !');
                return;
            }

            // SOLUTION FORM SUBMIT (corrigé)
            try {
                const response = await fetch('https://formsubmit.co/ajax/athomas@edenschool.fr', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    body: new URLSearchParams({
                        '_subject': 'Nouveau message site',
                        'message': valeur,
                        '_captcha': 'false',
                        '_next': 'https://formsubmit.co/success'  // Fix token
                    })
                });

                if (response.ok) {
                    alert('✅ Envoyé à ton mail !');
                    input.value = '';
                } else {
                    alert('❌ Erreur envoi');
                }
            } catch (error) {
                alert('❌ Problème connexion');
            }
        });