// Espera o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe 'active' ao link de navegação atual
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    // Função para atualizar o link ativo com base na seção visível
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Adiciona evento de scroll para atualizar o link ativo
    window.addEventListener('scroll', updateActiveLink);
    
    // Adiciona animação suave ao rolar para as seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
    
    // Exemplo de como adicionar projetos dinamicamente
    const projetosContainer = document.querySelector('.projetos-container');
    
    // Dados de exemplo para projetos
    const projetos = [
        {
            titulo: 'Projeto 1',
            descricao: 'Descrição do projeto 1',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            link: '#'
        },
        {
            titulo: 'Projeto 2',
            descricao: 'Descrição do projeto 2',
            tecnologias: ['React', 'Node.js'],
            link: '#'
        },
        {
            titulo: 'Projeto 3',
            descricao: 'Descrição do projeto 3',
            tecnologias: ['Python', 'Django'],
            link: '#'
        }
    ];
    
    // Função para criar elementos de projeto
    function criarProjeto(projeto) {
        const projetoElement = document.createElement('div');
        projetoElement.className = 'projeto';
        projetoElement.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="tecnologias">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${projeto.link}" class="projeto-link">Ver Projeto</a>
        `;
        return projetoElement;
    }
    
    // Adiciona projetos ao container
    projetos.forEach(projeto => {
        projetosContainer.appendChild(criarProjeto(projeto));
    });
    
    // Exemplo de como adicionar habilidades dinamicamente
    const habilidadesContainer = document.querySelector('.habilidades-container');
    
    // Dados de exemplo para habilidades
    const habilidades = [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
        'Python', 'Git', 'Responsive Design', 'UI/UX'
    ];
    
    // Adiciona habilidades ao container
    habilidades.forEach(habilidade => {
        const habilidadeElement = document.createElement('div');
        habilidadeElement.className = 'habilidade';
        habilidadeElement.textContent = habilidade;
        habilidadesContainer.appendChild(habilidadeElement);
    });
    
    // Exemplo de como adicionar links de contato dinamicamente
    const contatoContainer = document.querySelector('.contato-container');
    
    // Dados de exemplo para contatos
    const contatos = [
        { nome: 'GitHub', link: 'https://github.com/seu-usuario' },
        { nome: 'LinkedIn', link: 'https://linkedin.com/in/seu-usuario' },
        { nome: 'Email', link: 'mailto:seu-email@exemplo.com' }
    ];
    
    // Adiciona links de contato ao container
    contatos.forEach(contato => {
        const contatoElement = document.createElement('a');
        contatoElement.href = contato.link;
        contatoElement.className = 'contato-link';
        contatoElement.textContent = contato.nome;
        contatoContainer.appendChild(contatoElement);
    });
});
