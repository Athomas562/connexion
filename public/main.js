        const input = document.querySelector('.test');
        const button = document.querySelector('button');

        button.addEventListener('click', async function() {
            const valeur = input.value;
            
            if (valeur.trim() === '') {
                alert('Tape quelque chose !');
                return;
            }

            // ENVOI DIRECT SANS OUVRIR MAIL
            try {
                const response = await fetch('https://formsubmit.co/ajax/athomas@edenschool.fr', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        'Message': valeur,
                        '_subject': 'Nouveau message site',
                        '_captcha': 'false'
                    })
                });

                if (response.ok) {
                    alert('✅ Envoyé à ton mail !');
                    input.value = ''; // Vide le champ
                } else {
                    alert('❌ Erreur envoi');
                }
            } catch (error) {
                alert('❌ Problème connexion');
            }
        });