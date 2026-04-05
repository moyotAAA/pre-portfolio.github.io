        // --- THEME TOGGLE ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = themeToggleBtn.querySelector('i');
        const body = document.body;

        // Charger le thème au démarrage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            
            // Changer l'icône
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // --- MODAL DOCUMENTS ---
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");

        function openModal(e, type) {
            if(e) e.stopPropagation();
            modal.style.display = "flex";
            if(type === 'CV') {
                modalImg.src = "CV-M.TOUIL-Ayoub-9.jpg"; 
            } else {
                modalImg.src = "LM-M.TOUIL-Ayoub.jpg";
            }
        }
        function closeModal() {
            modal.style.display = "none";
        }

        // --- MODALE STAGE (INFO MODAL) ---
        const stageData = {
            'outs_photos': '<p>Photos Outscale à venir...</p>',
            'outs_rapport': '<p>Rapport Outscale à venir...</p>',
            'photos': `
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <img src="https://via.placeholder.com/300x200?text=Serveurs" style="width:100%; border-radius:10px;" alt="Photo 1">
                    <img src="https://via.placeholder.com/300x200?text=Bureau" style="width:100%; border-radius:10px;" alt="Photo 2">
                    <p style="grid-column:span 2; font-size:0.9rem; margin-top:10px;">Vues du siège et des équipements.</p>
                </div>
            `,
            'rapport': `
                <p>Téléchargez ou consultez le rapport complet.</p>
                <div style="background:var(--card-glass); padding:15px; border-radius:10px; margin-top:15px; display:flex; align-items:center; gap:15px;">
                    <i class="fas fa-file-pdf" style="font-size:2rem; color:red;"></i>
                    <div>
                        <strong>Rapport_Stage_Ayoub.pdf</strong><br>
                        <span style="font-size:0.8rem;">2.4 MB • PDF</span>
                    </div>
                    <a href="#" class="btn-main" style="padding:5px 15px; margin-left:auto; font-size:0.8rem;">Télécharger</a>
                </div>
            `,
            'competences': `
                <ul class="skill-list">
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C1.1 :</strong> Gérer le patrimoine informatique</li>
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C1.2 :</strong> Répondre aux incidents (GLPI)</li>
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C2.1 :</strong> Supervision des réseaux</li>
                </ul>
            `,
            'planning': `
                <p>Planning du déroulement de mon stage de 4 semaines :</p>
                <ul style="list-style:none; margin-top:15px; font-size:0.9rem;">
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 1 :</strong> Découverte infrastructure & Outils.</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 2-3 :</strong> Traitement tickets N1/N2.</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 3 :</strong> Traitement tickets N1/N2, intervention aux étages, inventaire...</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 4 :</strong> Début du projet MTR, inventaire, reconditionnement d'ordinateurs, traitement de tickets...</li>
                </ul>
            `
        };

        function openInfoModal(type) {
            const infoModal = document.getElementById('infoModal');
            const title = document.getElementById('infoTitle');
            const body = document.getElementById('infoBody');

            title.innerText = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
            body.innerHTML = stageData[type] || "<p>Contenu non disponible.</p>";
            infoModal.style.display = 'flex';
        }

        function closeInfoModal(e) {
            if (e.target.id === 'infoModal') {
                document.getElementById('infoModal').style.display = 'none';
            }
        }

        // --- GESTION DES NOUVELLES MODALES TECHNIQUES ---
        function openTechModal(modalId) {
            const m = document.getElementById(modalId);
            if(m) {
                m.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeTechModal(e, modalId) {
             if (e.target.id === modalId) {
                document.getElementById(modalId).style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // --- MODALE FORMATION COMPLÈTE ---
        function toggleFormationDetails() {
            const modal = document.getElementById('formation-modal');
            modal.classList.add('visible');
            document.body.style.overflow = 'hidden';
            showFormationStep('presentation');
        }

        function closeFormationModal(e) {
            if (!e || e.target.id === 'formation-modal') {
                const modal = document.getElementById('formation-modal');
                modal.classList.remove('visible');
                document.body.style.overflow = 'auto';
            }
        }

        function showFormationStep(step) {
            document.getElementById('step-presentation').classList.remove('active');
            document.getElementById('step-specialties').classList.remove('active');
            
            if (step === 'presentation') {
                document.getElementById('step-presentation').classList.add('active');
            } else if (step === 'specialties') {
                document.getElementById('step-specialties').classList.add('active');
            }
        }
