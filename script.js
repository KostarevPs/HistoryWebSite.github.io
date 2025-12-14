const programmingLanguages = [
    { id: 1, name: "Fortran", year: 1957, x: 100, y: 100, influences: [], color: "#006600", 
      info: "Первый высокоуровневый язык программирования. Разработан IBM для научных вычислений. Влиял на ALGOL и BASIC." },
    
    { id: 2, name: "Lisp", year: 1958, x: 250, y: 100, influences: [], color: "#006600", 
      info: "Второй старейший высокоуровневый язык. Основа функционального программирования. Влиял на Scheme, Clojure, Haskell." },
    
    { id: 3, name: "COBOL", year: 1959, x: 400, y: 100, influences: [], color: "#006600", 
      info: "Язык для бизнес-приложений. Используется в банковских и финансовых системах до сих пор." },
    
    { id: 4, name: "ALGOL", year: 1958, x: 550, y: 100, influences: [1], color: "#006600", 
      info: "Язык, оказавший влияние на многие последующие языки, особенно на Pascal и C. Ввёл понятие блочной структуры." },

    { id: 5, name: "BASIC", year: 1964, x: 700, y: 100, influences: [1], color: "#008800", 
      info: "Язык для начинающих. Широко использовался на ранних персональных компьютерах. Влиял на Visual Basic." },
    
    { id: 6, name: "Simula", year: 1967, x: 200, y: 200, influences: [4], color: "#008800", 
      info: "Первый объектно-ориентированный язык. Ввёл понятия классов и объектов. Влиял на Smalltalk, C++, Java." },
    
    { id: 7, name: "C", year: 1972, x: 400, y: 200, influences: [4], color: "#00AA00", 
      info: "Низкоуровневый язык с высокоуровневыми конструкциями. Основа для многих современных языков: C++, C#, Java, Go, Rust." },
    
    { id: 8, name: "Smalltalk", year: 1972, x: 600, y: 200, influences: [6], color: "#00AA00", 
      info: "Чистый объектно-ориентированный язык. Влиял на Objective-C, Java, Python, Ruby." },
    
    { id: 9, name: "Pascal", year: 1970, x: 800, y: 200, influences: [4], color: "#00AA00", 
      info: "Язык для обучения структурному программированию. Влиял на Modula, Ada, Delphi." },
    
    { id: 10, name: "SQL", year: 1974, x: 1000, y: 200, influences: [], color: "#00AA00", 
      info: "Декларативный язык для работы с реляционными базами данных. Стандарт для работы с данными." },
    
    { id: 11, name: "Scheme", year: 1975, x: 1200, y: 200, influences: [2], color: "#00AA00", 
      info: "Диалект Lisp с минимальным синтаксисом. Влиял на JavaScript, Ruby, Lua." },
    
    { id: 12, name: "C++", year: 1983, x: 300, y: 350, influences: [7], color: "#00CC00", 
      info: "Расширение C с объектно-ориентированными возможностями. Влиял на Java, C#, Rust." },
    
    { id: 13, name: "Objective-C", year: 1984, x: 450, y: 350, influences: [7, 8], color: "#00CC00", 
      info: "Объектно-ориентированный язык на основе C. Использовался в Apple экосистеме до Swift." },
    
    { id: 14, name: "Perl", year: 1987, x: 600, y: 350, influences: [7], color: "#00CC00", 
      info: "Язык для обработки текстов. Широко использовался в веб-разработке 1990-х. Влиял на PHP, Python, Ruby." },
    
    { id: 15, name: "Haskell", year: 1990, x: 750, y: 350, influences: [2], color: "#00CC00", 
      info: "Чисто функциональный язык со строгой статической типизацией. Влиял на Scala, Rust, Swift." },

    { id: 16, name: "Python", year: 1991, x: 200, y: 500, influences: [7, 8, 14], color: "#00FF00", 
      info: "Высокоуровневый язык с акцентом на читаемость кода. Популярен в науке, вебе, AI." },
    
    { id: 17, name: "Lua", year: 1993, x: 350, y: 500, influences: [7, 14], color: "#00FF00", 
      info: "Легковесный скриптовый язык. Используется в играх и встраиваемых системах." },
    
    { id: 18, name: "R", year: 1993, x: 500, y: 500, influences: [2, 7], color: "#00FF00", 
      info: "Язык для статистических вычислений и анализа данных. Популярен в науке о данных." },
    
    { id: 19, name: "Java", year: 1995, x: 650, y: 500, influences: [7, 12, 15], color: "#00FF00", 
      info: "Объектно-ориентированный язык с автоматическим управлением памятью. Кроссплатформенность через JVM." },
    
    { id: 20, name: "JavaScript", year: 1995, x: 800, y: 500, influences: [7, 11], color: "#00FF00", 
      info: "Язык для интерактивных веб-страниц. Теперь используется и на сервере (Node.js). Влиял на TypeScript, CoffeeScript." },
    
    { id: 21, name: "Ruby", year: 1995, x: 950, y: 500, influences: [8, 14, 16], color: "#00FF00", 
      info: "Динамический объектно-ориентированный язык. Известен благодаря фреймворку Ruby on Rails." },
    
    { id: 22, name: "PHP", year: 1995, x: 1100, y: 500, influences: [7, 14], color: "#00FF00", 
      info: "Скриптовый язык для веб-разработки. Широко используется для создания динамических сайтов." },
    
    { id: 23, name: "C#", year: 2000, x: 300, y: 650, influences: [7, 12, 19], color: "#00FF00", 
      info: "Объектно-ориентированный язык от Microsoft. Часть платформы .NET." },
    
    { id: 24, name: "Scala", year: 2004, x: 450, y: 650, influences: [15, 19], color: "#00FF00", 
      info: "Гибридный язык, сочетающий объектно-ориентированное и функциональное программирование." },
    
    { id: 25, name: "Go", year: 2009, x: 600, y: 650, influences: [7, 19], color: "#00FF00", 
      info: "Язык от Google с упрощённым синтаксисом и встроенной поддержкой параллелизма." },
    
    { id: 26, name: "Rust", year: 2010, x: 750, y: 650, influences: [7, 12, 15], color: "#00FF00", 
      info: "Язык системного программирования с акцентом на безопасность памяти и параллелизм." },
    
    { id: 27, name: "Kotlin", year: 2011, x: 900, y: 650, influences: [12, 19, 23], color: "#00FF00", 
      info: "Статически типизированный язык, работающий на JVM. Официальный язык для Android." },
    
    { id: 28, name: "TypeScript", year: 2012, x: 1050, y: 650, influences: [20, 23], color: "#00FF00", 
      info: "Статически типизированное надмножество JavaScript. Разработан Microsoft." },

    { id: 29, name: "Swift", year: 2014, x: 1200, y: 650, influences: [13, 19, 23], color: "#00FF00", 
      info: "Язык от Apple для разработки под iOS, macOS и другие платформы." },
    
    { id: 30, name: "Zig", year: 2020, x: 200, y: 750, influences: [7, 26], color: "#00FF00", 
      info: "Современный язык системного программирования, позиционируется как замена C с безопасностью памяти." },
    
    { id: 31, name: "Mojo", year: 2022, x: 400, y: 750, influences: [16], color: "#00FF00", 
      info: "Язык для AI и ML, совместимый с Python, но с более высокой производительностью." },
    
    { id: 32, name: "Carbon", year: 2022, x: 600, y: 750, influences: [12], color: "#00FF00", 
      info: "Экспериментальный язык от Google, позиционируется как наследник C++ с современным синтаксисом." }
];

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        initApp();
    }, 3000);
    
    function initApp() {
        initNavigation();
        initTreeVisualization();
        initCharts();
        setupEventListeners();
    }
    
    function initNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.content-section');
        
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetSection = this.getAttribute('data-section');
                
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetSection) {
                        section.classList.add('active');
                        
                        window.scrollTo({
                            top: section.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
        document.getElementById('continue-btn').addEventListener('click', function() {
            document.querySelector('.nav-btn[data-section="tree"]').click();
        });
    }

    function initTreeVisualization() {
        const canvas = document.getElementById('tree-canvas');
        const ctx = canvas.getContext('2d');
        const languageDetails = document.querySelector('.language-details');
        
        let zoom = 0.8;
        let offsetX = 100;
        let offsetY = 50;
        let isDragging = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let showInfluences = true;
        let selectedLanguage = null;
        let highlightedConnections = [];
        
        function drawTree() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawTimePeriods();

            if (showInfluences) {
                programmingLanguages.forEach(language => {
                    language.influences.forEach(influenceId => {
                        const sourceLang = programmingLanguages.find(l => l.id === influenceId);
                        if (sourceLang) {
                            drawConnection(sourceLang, language, false);
                        }
                    });
                });
            }

            if (selectedLanguage && highlightedConnections.length > 0) {
                highlightedConnections.forEach(connection => {
                    drawConnection(connection.source, connection.target, true);
                });
            }
            
            programmingLanguages.forEach(language => {
                drawLanguageNode(language);
            });
            drawPeriodLabels();
        }

        function drawTimePeriods() {
            const periods = [
                {y: 50, label: "1950-е", color: "rgba(0, 100, 0, 0.2)"},
                {y: 150, label: "1960-е", color: "rgba(0, 120, 0, 0.2)"},
                {y: 250, label: "1970-е", color: "rgba(0, 140, 0, 0.2)"},
                {y: 400, label: "1980-е", color: "rgba(0, 160, 0, 0.2)"},
                {y: 550, label: "1990-е", color: "rgba(0, 180, 0, 0.2)"},
                {y: 700, label: "2000-е", color: "rgba(0, 200, 0, 0.2)"},
                {y: 800, label: "2020-е", color: "rgba(0, 220, 0, 0.2)"}
            ];
            
            periods.forEach(period => {
                const yPos = period.y * zoom + offsetY;
                
                ctx.beginPath();
                ctx.moveTo(0, yPos);
                ctx.lineTo(canvas.width, yPos);
                ctx.strokeStyle = period.color;
                ctx.lineWidth = 2;
                ctx.stroke();
                
                ctx.font = "14px Arial";
                ctx.fillStyle = "#008800";
                ctx.textAlign = "left";
                ctx.fillText(period.label, 10, yPos - 5);
            });
        }

        function drawConnection(sourceLang, targetLang, isHighlighted) {
            const sourceX = sourceLang.x * zoom + offsetX;
            const sourceY = sourceLang.y * zoom + offsetY;
            const targetX = targetLang.x * zoom + offsetX;
            const targetY = targetLang.y * zoom + offsetY;
            
            ctx.beginPath();
            ctx.moveTo(sourceX, sourceY);
            const cp1x = sourceX + (targetX - sourceX) * 0.5;
            const cp1y = sourceY;
            const cp2x = sourceX + (targetX - sourceX) * 0.5;
            const cp2y = targetY;
            
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, targetX, targetY);
            
            if (isHighlighted) {
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 3;
                ctx.shadowColor = '#00FF00';
                ctx.shadowBlur = 10;
            } else {
                ctx.strokeStyle = '#00AA00';
                ctx.lineWidth = 1.5;
                ctx.shadowBlur = 0;
            }
            
            ctx.stroke();

            drawArrowhead(targetX, targetY, Math.atan2(targetY - cp2y, targetX - cp2x), isHighlighted);
            ctx.shadowBlur = 0;
        }

        function drawArrowhead(x, y, angle, isHighlighted) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-10, -5);
            ctx.lineTo(-10, 5);
            ctx.closePath();
            
            if (isHighlighted) {
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = '#00FF00';
                ctx.shadowBlur = 8;
            } else {
                ctx.fillStyle = '#00AA00';
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
            ctx.restore();
            ctx.shadowBlur = 0;
        }

        function drawLanguageNode(language) {
            const x = language.x * zoom + offsetX;
            const y = language.y * zoom + offsetY;
            const radius = 18 * zoom;
            const isSelected = selectedLanguage && selectedLanguage.id === language.id;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            
            if (isSelected) {
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = '#00FF00';
                ctx.shadowBlur = 15;
            } else {
                ctx.fillStyle = language.color;
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
            
            ctx.strokeStyle = isSelected ? '#00FF00' : '#00FF00';
            ctx.lineWidth = isSelected ? 3 : 2;
            ctx.stroke();
            
            ctx.shadowBlur = 0;
            
            ctx.font = `${12 * zoom}px Arial`;
            ctx.fillStyle = isSelected ? '#FFFFFF' : '#00FF00';
            ctx.textAlign = 'center';
            ctx.fillText(language.name, x, y - radius - 8 * zoom);
            
            ctx.font = `${10 * zoom}px Arial`;
            ctx.fillStyle = isSelected ? '#AAAAAA' : '#00AA00';
            ctx.fillText(language.year.toString(), x, y + radius + 12 * zoom);

            if (language.influences.length > 0) {
                ctx.beginPath();
                ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
                ctx.strokeStyle = '#00AA00';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        function drawPeriodLabels() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#00CC00";
            ctx.textAlign = "center";

            ctx.fillText("← Влияния языков", canvas.width / 2, 30);

            if (selectedLanguage) {
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 14px Arial";
                ctx.fillText(`Выбран: ${selectedLanguage.name} (${selectedLanguage.year})`, canvas.width / 2, canvas.height - 30);
                ctx.font = "12px Arial";
                ctx.fillStyle = "#00AA00";
                ctx.fillText("Подсвечены связи влияния", canvas.width / 2, canvas.height - 10);
            }
        }

        canvas.addEventListener('click', function(e) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            let clickedLang = null;
            
            programmingLanguages.forEach(language => {
                const langX = language.x * zoom + offsetX;
                const langY = language.y * zoom + offsetY;
                const radius = 18 * zoom;
                const distance = Math.sqrt((x - langX) ** 2 + (y - langY) ** 2);
                
                if (distance < radius) {
                    clickedLang = language;
                }
            });
            
            if (clickedLang) {
                if (selectedLanguage && selectedLanguage.id === clickedLang.id) {
                    selectedLanguage = null;
                    highlightedConnections = [];
                } else {
                    selectedLanguage = clickedLang;
                    updateHighlightedConnections();
                }

                showLanguageDetails(clickedLang);

                drawTree();
            }
        });
        
        function updateHighlightedConnections() {
            highlightedConnections = [];
            
            if (!selectedLanguage) return;

            programmingLanguages.forEach(language => {
                if (language.influences.includes(selectedLanguage.id)) {
                    highlightedConnections.push({
                        source: selectedLanguage,
                        target: language,
                        type: "influence_on"
                    });
                }
            });

            selectedLanguage.influences.forEach(influenceId => {
                const sourceLang = programmingLanguages.find(l => l.id === influenceId);
                if (sourceLang) {
                    highlightedConnections.push({
                        source: sourceLang,
                        target: selectedLanguage,
                        type: "influence_from"
                    });
                }
            });
            
            const influencedLanguages = programmingLanguages.filter(lang => 
                lang.influences.includes(selectedLanguage.id)
            );

            const influencingLanguages = programmingLanguages.filter(lang => 
                selectedLanguage.influences.includes(lang.id)
            );

            updateConnectionInfo(influencingLanguages, influencedLanguages);
        }

        function updateConnectionInfo(influencing, influenced) {
            const connectionsInfo = document.getElementById('connections-info');
            if (!connectionsInfo) {
                const languageDetails = document.querySelector('.language-details');
                const div = document.createElement('div');
                div.id = 'connections-info';
                div.style.marginTop = '15px';
                div.style.padding = '10px';
                div.style.backgroundColor = '#002200';
                div.style.border = '1px solid #004400';
                div.style.borderRadius = '5px';
                languageDetails.appendChild(div);
            }
            
            const connectionsInfoDiv = document.getElementById('connections-info');
            
            let html = `<div style="color: #00FF00; font-weight: bold; margin-bottom: 8px;">СВЯЗИ ВЛИЯНИЯ:</div>`;
            
            if (influencing.length > 0) {
                html += `<div style="color: #00AA00; margin-bottom: 5px;"><strong>Наследует от:</strong> `;
                html += influencing.map(lang => `<span style="color: #00FF00">${lang.name}</span>`).join(', ');
                html += `</div>`;
            }
            
            if (influenced.length > 0) {
                html += `<div style="color: #00AA00;"><strong>Повлиял на:</strong> `;
                html += influenced.map(lang => `<span style="color: #00FF00">${lang.name}</span>`).join(', ');
                html += `</div>`;
            }
            
            connectionsInfoDiv.innerHTML = html;
        }

        function showLanguageDetails(language) {
            const influenceNames = getInfluenceNames(language);
            const influencedBy = getLanguagesInfluencedBy(language);
            
            languageDetails.innerHTML = `
                <h4>${language.name} (${language.year})</h4>
                <p><strong>Описание:</strong> ${language.info}</p>
                <p><strong>Наследует от:</strong> ${influenceNames}</p>
                <p><strong>Повлиял на:</strong> ${influencedBy}</p>
                <p><strong>Популярность в 2025:</strong> ${getPopularity2025(language.name)}</p>
                <p><strong>Основное применение:</strong> ${getMainUsage(language.name)}</p>
            `;
        }
        
        function getInfluenceNames(language) {
            if (language.influences.length === 0) return 'оригинальный язык (без прямых предшественников)';
            return language.influences.map(id => {
                const lang = programmingLanguages.find(l => l.id === id);
                return lang ? `<span style="color: #00FF00">${lang.name}</span>` : 'неизвестно';
            }).join(', ');
        }

        function getLanguagesInfluencedBy(language) {
            const influenced = programmingLanguages.filter(lang => 
                lang.influences.includes(language.id)
            );
            
            if (influenced.length === 0) return 'ещё не оказал заметного влияния';
            return influenced.map(lang => `<span style="color: #00FF00">${lang.name}</span>`).join(', ');
        }

        function getPopularity2025(langName) {
            const popularity = {
                'Python': 'очень высокая (1 место в TIOBE)',
                'JavaScript': 'очень высокая (веб-разработка)',
                'Java': 'высокая (корпоративные приложения)',
                'C': 'высокая (системное программирование)',
                'C++': 'высокая (игры, системы реального времени)',
                'C#': 'высокая (.NET экосистема)',
                'Go': 'растущая (облачные сервисы)',
                'Rust': 'растущая (безопасные системы)',
                'TypeScript': 'растущая (крупные веб-проекты)',
                'Swift': 'высокая (экосистема Apple)',
                'Kotlin': 'растущая (Android разработка)',
                'PHP': 'стабильная (веб-сайты)',
                'Ruby': 'стабильная (стартапы, веб)',
                'R': 'высокая (наука о данных)',
                'Zig': 'низкая (экспериментальный, растущий)',
                'Mojo': 'низкая (новый, для AI/ML)',
                'Carbon': 'очень низкая (экспериментальный)',
                'Fortran': 'низкая (научные вычисления, legacy)',
                'COBOL': 'низкая (банковские системы, legacy)',
                'Lisp': 'низкая (AI исследования, образование)'
            };
            return `<span style="color: #00FF00">${popularity[langName] || 'средняя/специфическая'}</span>`;
        }

        function getMainUsage(langName) {
            const usage = {
                'Python': 'AI/ML, наука о данных, веб-разработка, автоматизация',
                'JavaScript': 'веб-разработка (фронтенд и бэкенд), мобильные приложения',
                'Java': 'корпоративные приложения, Android, большие системы',
                'C': 'операционные системы, встраиваемые системы, драйверы',
                'C++': 'игры, системы реального времени, высокопроизводительные вычисления',
                'C#': 'Windows приложения, игры (Unity), веб-сервисы',
                'Go': 'облачные сервисы, микросервисы, инструменты DevOps',
                'Rust': 'безопасные системные программы, веб-ассемблер, браузерные компоненты',
                'TypeScript': 'крупномасштабные веб-приложения, полный стек разработки',
                'Swift': 'приложения для iOS/macOS/watchOS',
                'Kotlin': 'Android разработка, серверные приложения',
                'Rust': 'системное программирование, безопасные приложения',
                'Zig': 'системное программирование, замена C',
                'Mojo': 'искусственный интеллект, машинное обучение',
                'Carbon': 'экспериментальная замена C++'
            };
            return `<span style="color: #00FF00">${usage[langName] || 'различные области применения'}</span>`;
        }

        document.getElementById('zoom-in').addEventListener('click', function() {
            zoom *= 1.2;
            drawTree();
        });
        
        document.getElementById('zoom-out').addEventListener('click', function() {
            zoom /= 1.2;
            drawTree();
        });
        
        document.getElementById('reset-view').addEventListener('click', function() {
            zoom = 0.8;
            offsetX = 100;
            offsetY = 50;
            selectedLanguage = null;
            highlightedConnections = [];
            drawTree();

            const connectionsInfo = document.getElementById('connections-info');
            if (connectionsInfo) {
                connectionsInfo.remove();
            }

            document.querySelector('.language-details').innerHTML = 
                '<p>Выберите язык на древе для просмотра подробной информации</p>';
        });
        
        document.getElementById('auto-arrange').addEventListener('click', function() {
            programmingLanguages.forEach(lang => {
                const year = lang.year;
                let yPos = 0;
                
                if (year < 1960) yPos = 100;
                else if (year < 1970) yPos = 150;
                else if (year < 1980) yPos = 250;
                else if (year < 1990) yPos = 400;
                else if (year < 2000) yPos = 550;
                else if (year < 2010) yPos = 700;
                else yPos = 800;

                let xPos = 200;
                if (lang.influences.length > 0) {
                    const firstInfluence = programmingLanguages.find(l => l.id === lang.influences[0]);
                    if (firstInfluence) {
                        xPos = firstInfluence.x + 150;
                    }
                }
                
                lang.x = xPos;
                lang.y = yPos;
            });

            normalizePositions();

            selectedLanguage = null;
            highlightedConnections = [];
            
            drawTree();
            
            document.querySelector('.language-details').innerHTML = 
                '<p>Выберите язык на древе для просмотра подробной информации</p>';
        });
        
        function normalizePositions() {
            const groups = {};
            programmingLanguages.forEach(lang => {
                if (!groups[lang.y]) groups[lang.y] = [];
                groups[lang.y].push(lang);
            });

            Object.keys(groups).forEach(y => {
                const langs = groups[y];
                langs.sort((a, b) => a.x - b.x);
                
                const spacing = 180;
                let currentX = 100;
                
                langs.forEach(lang => {
                    lang.x = currentX;
                    currentX += spacing;
                });
            });
        }

        document.getElementById('show-influences').addEventListener('click', function() {
            showInfluences = !showInfluences;
            this.innerHTML = showInfluences ? 
                '<i class="fas fa-link"></i> Скрыть все связи' : 
                '<i class="fas fa-link"></i> Показать все связи';
            drawTree();
        });

        const resetSelectionBtn = document.createElement('button');
        resetSelectionBtn.className = 'control-btn';
        resetSelectionBtn.innerHTML = '<i class="fas fa-times-circle"></i> Сбросить выделение';
        resetSelectionBtn.addEventListener('click', function() {
            selectedLanguage = null;
            highlightedConnections = [];
            drawTree();

            const connectionsInfo = document.getElementById('connections-info');
            if (connectionsInfo) {
                connectionsInfo.remove();
            }

            document.querySelector('.language-details').innerHTML = 
                '<p>Выберите язык на древе для просмотра подробной информации</p>';
        });

        document.querySelector('.controls').appendChild(resetSelectionBtn);

        canvas.addEventListener('mousedown', function(e) {
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            canvas.style.cursor = 'grabbing';
        });
        
        canvas.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            offsetX += e.clientX - dragStartX;
            offsetY += e.clientY - dragStartY;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            
            drawTree();
        });
        
        canvas.addEventListener('mouseup', function() {
            isDragging = false;
            canvas.style.cursor = 'default';
        });
        
        canvas.addEventListener('mouseleave', function() {
            isDragging = false;
            canvas.style.cursor = 'default';
        });

        drawTree();

        showLanguageDetails(programmingLanguages[0]);
    }
    
    function initCharts() {
        const ctx = document.getElementById('popularity-chart').getContext('2d');

        const languages = ['Python', 'C', 'C++', 'Java', 'C#', 'JavaScript', 'Go', 'TypeScript', 'PHP', 'Rust'];
        const popularity2025 = [16.8, 14.2, 13.5, 11.3, 8.7, 4.5, 3.8, 3.5, 2.9, 2.7];
        const popularity2023 = [15.5, 13.5, 12.3, 10.5, 7.5, 3.0, 1.5, 2.4, 2.6, 1.8];
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: languages,
                datasets: [
                    {
                        label: '2025 год',
                        data: popularity2025,
                        backgroundColor: '#00AA00',
                        borderColor: '#00FF00',
                        borderWidth: 1
                    },
                    {
                        label: '2023 год (для сравнения)',
                        data: popularity2023,
                        backgroundColor: '#006600',
                        borderColor: '#00AA00',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#00FF00',
                            font: {
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Динамика популярности языков программирования',
                        color: '#00FF00',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Рейтинг популярности (%)',
                            color: '#00AA00'
                        },
                        ticks: {
                            color: '#00AA00',
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: '#003300'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#00AA00'
                        },
                        grid: {
                            color: '#003300'
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function setupEventListeners() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.info-card, .fact-card, .stat-card, .example-section').forEach(card => {
            observer.observe(card);
        });

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                
                if (section) {
                    setTimeout(() => {
                        section.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            });
        });
    }
});