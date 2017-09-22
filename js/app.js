(function () {
    window.app = {
        Views: {},
        Extensions: {},
        Router: null,
        currentProject: null,
        projects : [
            {
                'titre': 'COMITÉ<br/>LÉGER',
                'menutitre': 'COMITÉ<br/>LÉGER',
                'infos1': 'Comité du peintre Fernand Léger',
                'infos2': 'Art Direction & Developpement',
                'url': 'comite-leger',
                'background': 'images/comiteleger/bg-comite.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>The Comité Léger, under the aegis of Nadia Léger’s grandson and great-granddaughter, is authorized to issue certificates of authenticity. It is also able to issue opinions on multiple works as lithographs, bronzes, ceramics and mosaics.</p><p>It commits itself to act independently, free from all conflicts of interest, within a strictly defined ethical framework and strict administrative management.</p>',
                'rightBox': 'images/comiteleger/peintre.jpg',
                'fullBox1': 'images/comiteleger/les-cyclistes-fernand-leger-1943.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Website',
                'projetBox': '<h2>The brief</h2><p>After having worked many years alongside with Fernand Léger’s legal representatives to acquire their authenticity, the Comité wanted to go to the next step by being the number one reference for the painter. Therefore they needed a website reflecting their professionalism as well as their attachment to the artist.</p>',
                'resultatBox': '<h2>The result</h2><p>The aim was to create an easy to navigate website as many buyers are not web accustomed, mixing up the Fernand Léger’s painting style with a professional and trustfull approach.</p><p>We condensed all informations on a 5 pages basis, with soft animations tending to play with the word Léger (Light in english) by giving the sensation of floating letters and blocks.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Art Direction<br/>Development</p><p><span class="bold">Awards & Recognitions</span><br/>CSS Awards, CSS Light, CSS Winner</p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/comiteleger/ipad-comite.jpg"/>',
                'resultatBox2': 'images/comiteleger/iphone-comite.jpg',
                'resultatBox3': '<a href="http://comiteleger.fr/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770882?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'ACTION<br/>AGAINST<br/>HUNGER',
                'menutitre': 'ACTION AGAINST<br/>HUNGER',
                'infos1': 'International humanitarian organization',
                'infos2': 'Art Direction & Developpement',
                'url': 'action-against-hunger',
                'background': 'images/bg-acf.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>Action Against Hunger is a global humanitarian organization that takes decisive action against the causes and effects of hunger. It saves the lives of malnourished children. It ensures everyone can access clean water, food, training and healthcare. It enables entire communities to be free from hunger. In the past year, Action Against Hunger’s global network served 14.9 million people in 47 countries.</p>',
                'rightBox': 'images/acf/acf-wall.jpg',
                'fullBox1': 'images/acf/child-praying.jpg',
                'leftBoxTop': 'images/acf/acf-child.jpg',
                'leftBoxBottom': 'Identity<br/>Website',
                'projetBox': '<h2>The brief</h2><p>After the recent rebranding of their identity, the organization needed a fresh and new vision for their new communication tools. They were looking for modern and clean way of showing the information to impact more people and make them react, regarding the big crisis the world is facing nowadays. The contents were therefore very sensitive, but it was at the same time a chance to work for a cause that I fully support.</p>',
                'resultatBox': '<h2>The result</h2><p> The first communication medium was a 4 pages printed document about the nutrition’s situation in Yemen, to show the organization’s role and what was left to do to help more people and save lives. Using the new identity of Action Against Hunger, I structured the information using reflexion and creativity, in order to create something very clear but also attractive. Printed in many copies, it was a success.</p><p>After this, other orders arrived as the work was appreciated and as I was getting closer to the team, including the main Middle East regional brochure, presenting the organization and their past actions in 2016, as well as their future actions for 2017.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>4 pages Yemen Nutrition Facts<br/>4 pages press kit<br/>Somalie Facebook publication<br/>32 pages Middle East Regional Office<br/>Run Against Hunger documents proposition</p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<img src="images/acf/brochure-front.jpg"/>',
                'resultatBox1': '<img src="images/acf/brochure-inside.jpg"/>',
                'resultatBox2': 'images/acf/brochure-regionale-open.jpg',
                'resultatBox3': '<a href="http://youvaltayar.com/bat/acf/yemen-dashboard-november2016.pdf" target="_blank" class="more-info-button">View nutrition brochure</a><br/><a href="http://youvaltayar.com/bat/acf/regional-middleeast-december2016.pdf" target="_blank" class="more-info-button">View regional brochure</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770823?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'TOSHIO<br/>BANDO',
                'menutitre': 'TOSHIO<br/>BANDO',
                'infos1': 'Comité du peintre Toshio Bando',
                'infos2': 'Art Direction & Developpement',
                'url': 'toshio-bando',
                'background': 'images/bg-toshio.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>The comité Toshio Bando, directed by Jacques Boutersky, represents the official expertise for the work of Toshio Bando, one of Tsuguharu Foujita’s close friend. The fondation of the comité started a few years ago when Toji Bando, the artist’s widom, entrusted Jacques Boutersky with the task of preparing the catalog Raisonné. Since 1989, he’s a member of the French Union of Experts for the work of Toshio Bando.</p>',
                'rightBox': 'images/toshio/toshio-bando.jpg',
                'fullBox1': 'images/toshio/singe-toshio-bando.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Identity<br/>Website',
                'projetBox': '<h2>The brief</h2><p>Considering the amazing work Toshio Bando has produced along his life, it was normal for Jacques Boutersky to show this to the world, as Fujita once did. Toshio, who was a lot more descret than his friend, never talked about his work, although the quality is remarkable. A branding as well as a website was necessary.</p>',
                'resultatBox': '<h2>The result</h2><p>First step was to create an identity out of nothing. But the comité was not really into having a logotype, as for them the name Toshio Bando was enough. After few discussions and few propositions, we agreed on one, relevant and simple, that would not alter the painter’s name. The letter "O" shape, with a red color, representing the three O contained in his name, as well as a modern Japan flag.</p><p>The second step was the website, mixing up modernism and history, easily accessible for people such as collectors who were more into art than websites. Fully responsive, the website is ajax built and has a very ergonomic way of presenting the artist’s work.',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Art Direction<br/>Development</p><p><span class="bold">Awards & Recognitions</span><br/><a href="http://www.cssdesignawards.com/sites/toshio-bando/29938/" target="_blank">CSSDA</a>, <a href="https://www.cssawards.net/website/toshio-bando/" target="_blank">CSS Awards</a>, <a href="http://www.csslight.com/website/18895/Toshio-Bando" target="_blank">CSS Light</a>, <a href="http://www.csswinner.com/details/toshio-bando/11198" target="_blank">CSS Winner</a></p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/toshio/ipad-toshio.jpg"/>',
                'resultatBox2': 'images/toshio/iphone-toshio.jpg',
                'resultatBox3': '<a href="http://toshio-bando.fr/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770578?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'LES JARDINS<br/>DE CORNEILLA',
                'menutitre': 'LES JARDINS<br/>DE CORNEILLA',
                'infos1': 'Maison d&rsquo;hôtes',
                'infos2': 'Art Direction & Developpement',
                'url': 'les-jardins-de-corneilla',
                'background': 'images/bg-jardins.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>In the heart of Roussillon, this luxuary guest house is the only one in the region that got the "5 épis" rank by the famous "Gîtes de France" guest house reference.  Ideally located, less than 50 km from the impressive Cathar castles and famous Romanesque abbeys, Les Jardins de Corneilla is a perfect place to rest, eat and relax.</p>',
                'rightBox': 'images/corneilla/pool-corneilla.jpg',
                'fullBox1': 'images/corneilla/citron.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Identity<br/>Website',
                'projetBox': '<h2>The brief</h2><p>As the guest house became more and more famous in the region, and after guetting its 5th épis from Gîtes de France, everything needed to be properly done in order to show to the visitors the best of the place. A logotype needed to be created, professional photographies needed to be taken and a new website had to be done.</p>',
                'resultatBox': '<h2>The result</h2><p>As the aim was create a modern and luxuary image, the logotype was created uppon this. With a small and a large version, the main shape shows a modern plant with 2 leaves, to highlight the word "Jardins" (garden in english). The large version has the entire name inside this shape, the small version only has 2 letters.</p> <p>After this, high quality photographies were taken all over the place to brightly show the rooms of course, but also the garden, the pool and all the other equipments</p><p>Finally the website, playing mainly with photographies, with little but usefull text, using a system of modern blocks for a very clean result. The project was a success as the guest house is always fully booked since then with many positive reviews.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Art Direction<br/>Development</p><p><span class="bold">Awards & Recognitions</span><br/><a href="http://www.csswinner.com/details/les-jardins-de-corneilla/11211" target="_blank">CSS Winner</a>, <a href="http://www.csslight.com/website/20311/Les-Jardins-de-Corneilla" target="_blank">CSS Light</a></p>',
                'resultatLogo': '<img src="images/corneilla/logo-jardins-de-corneilla.png"/>',
                'resultatFont': '<p>Gloucester Bold Condensed</p><span class="gloucester">A B C D E F G</span><br/><span class="gloucester">a b c d e f g</span><br/><div class="sep-small"></div><p>Goudy Old Style</p><span class="goudyNormal">A B C D E F G</span><br/><span class="goudyNormal">a b c d e f g</span>',
                'resultatColor': '<p>#333333&nbsp; #BCB69E</p><span class="color-box" id="corneilla-color1"></span> <span class="color-box" id="corneilla-color2"></span>',
                'resultatBoxLogoFull': 'images/corneilla/mockup-print.jpg',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/corneilla/ipad-corneilla.jpg"/>',
                'resultatBox2': 'images/corneilla/iphone-corneilla.jpg',
                'resultatBox3': '<a href="http://lesjardinsdecorneilla.fr/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770823?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'STEVEN<br/>KIRSCH',
                'menutitre': 'STEVEN<br/>KIRSCH',
                'infos1': 'Bijoutier de luxe',
                'infos2': 'Art Direction & Developpement',
                'url': 'steven-kirsch',
                'background': 'images/bg-steven.jpg',
                'clientBox': '<h2>The client</h2><p>Founded in 2000, Steven Kirsch Inc., famous american jewelry, is located in the heart of New York’s Diamond District, and specializes in producing one-of-a-kind pieces. It has set it’s own standards of originality in fine jewelry, elevating the jewelers art to new height’s of grandeur through bold, innovative designs and superior workmanship. Steven Kirsch’s creativity sprang from a desire to display the finest quality gemstones in the most elegant settings possible, emphasizing the beauty of the gemstones themselves.</p>',
                'rightBox': 'images/steven/diamond-creation.jpg',
                'fullBox1': 'images/steven/banner-steven1.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Website',
                'projetBox': '<h2>The brief</h2><p>A this time, a website was already existing, but the image it was reflecting was the opposite of where Steven Kirsch Inc. was evolving: the products were masterpieces, and the website had to show so. Moreover, as the artist was producing one-of-a-kind pieces, customers needed to understand all the possibilities offered for their future jewels.</p>',
                'resultatBox': '<h2>The result</h2><p>The website was done under Black Negative agency direction, from which Cecile Martin managed the video and the webdesign part, while I did the development part. The combination brought a modern website, highlighting the magnificient work of the artist, and also helping visitors to find "their one" through the Search page.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Development</p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/steven/ipad-steven.jpg"/>',
                'resultatBox2': 'images/steven/iphone-steven.jpg',
                'resultatBox3': '<a href="http://stevenkirsch.com/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223772683?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'RECUPER&rsquo;<br/>ACTEURS',
                'menutitre': 'RECUPER&rsquo;<br/>ACTEURS',
                'infos1': 'Webdocumentaire sur le recyclage',
                'infos2': 'Art Direction & Developpement',
                'url': 'recuperacteurs',
                'background': 'images/recuperacteurs/decharge.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>Maeva Morin starts her adventure in Argentina in 2008 during a first 6 months trip there. At this time, she’s already very concerned about recycling, but she really starts the Recuper’Acteurs project in 2011, with Curioz’World association support.</p><p>It is after spending time studying their recycling practices alongside Creando Conciencia with whom she did the documentary, that the idea of mixing up France and Argentina was born.</p>',
                'rightBox': 'images/recuperacteurs/maeva.jpg',
                'fullBox1': 'images/recuperacteurs/recycled-objects.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Webdocumentary',
                'projetBox': '<h2>The brief</h2><p>Very concerned about humanitarian and environmental causes, Maeva wanted to put this documentary into a format which could make an impact and last long. The aim was to reach the most people we could, knowing that we had to do something clear as well as attractive to make them read the whole documentary, and understand the importance of recycling and the possibilities it offers.</p>',
                'resultatBox': '<h2>Result</h2><p>After thinking of few solutions, I chose to present this project as a web documentary containing all the pictures and audio records. The challenge was to set all this information into something people would read until the end. Therefore, I decided to make them follow a definite way accross the website, using the fullscreen format for an immersive experience, and setting up the right amount of information in each section.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Design & Development</p><p><span class="bold">Awards & Recognitions</span><br/>CSSDA, CSS Winner</p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/recuperacteurs/ipad-recuperacteurs.jpg"/>',
                'resultatBox2': 'images/recuperacteurs/wall-paint.jpg',
                'resultatBox3': '<a href="http://recuperacteurs.fr" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770691?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'MARINE<br/>MANCINI',
                'menutitre': 'MARINE<br/>MANCINI',
                'infos1': 'Chant & Voix off',
                'infos2': 'Art Direction & Developpement',
                'url': 'marinemancini',
                'background': 'images/marine/bg-marine.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>This young artist, inspired by Soul music and Gospel, sings for the Choeur Gospel de Paris in 2008, directed by Georges Seba (known for his work with Céline Dion, Yannick Noah...), with whom she did lots of stages and TV shows, and even a date with KASSAV’ to celebrate their 30 years anniversary at the Stade de France. In 2010, she got contacted through MySpace by Muttonheads DJ and Mathieu Bouthier with whom she composed the single New York City (signed at Universal USM) with Fun Radio partnership.</p><p>Since then, she works with many foreign DJs and multiply her artisctic collaborations.</p>',
                'rightBox': 'images/marine/marine-mancini.jpg',
                'fullBox1': 'images/marine/marine-studio.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Identity<br/>Website',
                'projetBox': '<h2>The brief</h2><p>As Marine was doing more and more projects, she needed another support aside MySpace and Soundcloud to extend and professionalise her image. She needed to be able to store and share her work (music and videos) to french and foreign artists, as well as producers and advertising companies. But most importantly she needed this support to evolve with her career.</p>',
                'resultatBox': '<h2>The result</h2><p>First of all, I made a logo for her, so that people could easily identify her through a distinct sign amongst all the other artists. Considering her desire to be able to easily change her music style if she wanted, as she was still young. We agreed on a modern but destructured shape, that could translate the originality and freshness present in her songs.</p><p>Second step was to create the support, and the most suited solution was of course a website, as all her work was also digitably accessible. Following the logotype image, I realised for her a modern and clean website, putting her work in evidence, and that would make visitors curious about discovering all sections.',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Art Direction<br/>Development</p><p><span class="bold">Awards & Recognitions</span><br/>CSSDA, CSS Winner</p>',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/marine/ipad-marine.jpg"/>',
                'resultatBox2': 'images/marine/marine-profil.jpg',
                'resultatBox3': '<a href="http://marinemancini.com/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223770785?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            },
            {
                'titre': 'ENSEMBLE<br/>CORRESPON<br/>DANCES',
                'menutitre': 'ENSEMBLE<br/>CORRESPON DANCES',
                'infos1': 'Orchestre français, musique du XVIIe',
                'infos2': 'Art Direction & Developpement',
                'url': 'ensemble-correspondance',
                'background': 'images/bg-ensemble.jpg',
                'images': [''],
                'clientBox': '<h2>The client</h2><p>Ensemble Correspondances brings together singers and instrumentalists under the direction of harpsichordist and organist Sébastien Daucé. Finding its name in Baudelairian poetry, it links music and other arts.</p><p>Since its foundation in 2009, Correspondances presents mainly 17th century French sacred music ; an era which saw produced a considerable number of masterpieces, some still unpublished, just waiting to be revived by young and passionate musicians.</p>',
                'rightBox': 'images/ensemble/sebastien-dauce-biographie.jpg',
                'fullBox1': 'images/ensemble/ensemble-correspondances-sebastien-dauce.jpg',
                'leftBoxTop': 'images/recuperacteurs/wall-creando.jpg',
                'leftBoxBottom': 'Identity<br/>Website',
                'projetBox': '<h2>The brief</h2><p>As one of the most famous baroque orchestra in France, Ensemble Correspondances has already started its way on the international scene, and gets more and more success accross countries. It was urgent to rebrand all their identity as well as changing their previous website to be closer to what they really reprensent: beauty, grace, softness, travel...music from the 17 century, "A great century of music".</p>',
                'resultatBox': '<h2>The result</h2><p>The creation of the logotype came first, and was quite the hard challenge, as the aim was to approach something modern but elegant and gracefull. And also because it was hard for the client itself to stop on a direction to take. After trying few shapes, we decided to keep something light and clear, using only typography, and discretly showing notes and tablatures with lines and letter p and d.</p><p>Next step was the website, an alliance of grace and modernism, with many contents well structured and easily accessible: presentation, history, musicians, programs, discography...Fully responsive, developped with ajax to enhance speed and let some music be played on all pages while navigating.</p>',
                'resultatBoxRight': '<p><span class="bold">Deliverables</span><br/>Art Direction<br/>Development</p><p><span class="bold">Awards & Recognitions</span><br/><a href="http://www.cssdesignawards.com/sites/ensemble-correspondances/30961" target="_blank">CSSDA</a>, <a href="http://www.csswinner.com/details/ensemble-correspondances/11669" target="_blank">CSS Winner</a>, <a href="http://www.csslight.com/website/20310/Ensemble-Correspondances" target="_blank">CSS Light</a></p>',
                'resultatLogo': '<img src="images/ensemble/logo-ensemble-correspondances.png"/>',
                'resultatFont': '<p>Avenir Light</p><span class="avenirLight">A B C D E F G</span><br/><span class="avenirLight">a b c d e f g</span>',
                'resultatColor': '<p>#222222&nbsp; #7C645A</p><span class="color-box" id="ensemble-color1"></span> <span class="color-box" id="ensemble-color2"></span>',
                'resultatBoxLogoFull': 'images/ensemble/print-ensemble.jpg',
                'resultatBoxFull1': '',
                'resultatBoxFull': '<div class="bg-video"><div class="screen-video"></div></div>',
                'resultatBox1': '<img src="images/ensemble/ipad-ensemble.jpg"/>',
                'resultatBox2': 'images/ensemble/iphone-ensemble.jpg',
                'resultatBox3': '<a href="http://ensemblecorrespondances.com/" target="_blank" class="more-info-button">View website</a>',
                'videoEl': '<iframe src="https://player.vimeo.com/video/223772534?autoplay=1&loop=1" width="600" height="400" frameborder="0"></iframe>'
            }
        ],
        initParaArr : [
            "LET'S CREATE<br/>SOMETHING<br/>MEMORABLE<br/>AND ALIVE",
            "MOVE YOUR<br/>BUSINESS<br/>TO A CRAZY<br/>NEW LEVEL",
            "WITH GREAT<br/>DESIGNS COME<br/>PRICELESS<br/>EMOTIONS",
            "FANCY A<br/>DRINK?<br/>LET'S MEET<br/>SOMEWHERE",
            "LOST IN<br/>THE MATRIX?<br/>COME, I'll BE<br/>YOUR GUIDE",
            "YA GETTING<br/>BORED?<br/>JUST CLICK<br/>MY LOGO"
        ],  
        currentParaIdx : 0,
        isMobile: function(){
            if(    navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
                || window.innerWidth <= 480
                ){
                return true;
            }
            else {
                return false;
            }
        },
        isTablet: function(){
            if(window.innerWidth <= 768 && window.innerWidth > 480){
                return true;
            }
            else {
                return false;
            }   
        },     
        init: function(){            
            var self = this;

            var planeWidth = window.innerWidth/4
            ,planeHeight = window.innerHeight/3.8        
            ,planePosArr = [
                {x:-1.5*planeWidth, y:0.5*planeHeight, z:0},
                {x:-0.5*planeWidth, y:0.5*planeHeight, z:0},
                {x: 0.5*planeWidth, y:0.5*planeHeight, z:0},
                {x: 1.5*planeWidth, y:0.5*planeHeight, z:0},
                {x:-1.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x:-0.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x: 0.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x: 1.5*planeWidth, y:-0.5*planeHeight, z:0},
            ]
            ;           
            if(app.isTablet()){
                console.log("Applying Tab Settings")
                planeWidth = window.innerWidth/2
                ,planeHeight = window.innerHeight/4        
                ,planePosArr = [
                    {x:-0.5*planeWidth, y: 1.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y: 1.5*planeHeight, z:0},                    
                    {x:-0.5*planeWidth, y: 0.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y: 0.5*planeHeight, z:0},
                    {x:-0.5*planeWidth, y:-0.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y:-0.5*planeHeight, z:0},
                    {x:-0.5*planeWidth, y:-1.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y:-1.5*planeHeight, z:0},
                ];
            }else if(app.isMobile()){
                console.log("Applying Mobile Settings")
                planeWidth = window.innerWidth
                ,planeHeight = window.innerHeight/2.5        
                ,planePosArr = [
                    {x:0, y: 0.25*planeHeight, z:0},
                    {x:0, y:-0.75*planeHeight, z:0},                    
                    {x:0, y:-1.75*planeHeight, z:0},
                    {x:0, y:-2.75*planeHeight, z:0},
                    {x:0, y:-3.75*planeHeight, z:0},
                    {x:0, y:-4.75*planeHeight, z:0},
                    {x:0, y:-5.75*planeHeight, z:0},
                    {x:0, y:-6.75*planeHeight, z:0},
                ];
            }                                        

            this.currentParaIdx = Math.floor(Math.random() * this.initParaArr.length);
            /*
              This statement does the following
              1. Matches paragraph for project first letters
              2. Sets the loading of all background textures
              3. Adds webgl projects for home, menu and project 
            */
            this.currProjSet = this.getHomePara(this.areTitlesInPara(this.initParaArr[this.currentParaIdx]));

            this.planeWidth = planeWidth;
            this.planeHeight = planeHeight;
            this.planePosArr = planePosArr;
            this.currentRoute = "";
            this.router = new app.Router();
            this.instance = new app.Views.App();
            
            Backbone.history.start();
            window.addEventListener( 'resize', self.resizeProjects, false );
            //window.addEventListener( 'mousemove', self.onMouseMove, false );
            //window.addEventListener('scroll', function() { console.log("Scrolled"); });
            
            var vis = (function(){
                var stateKey, 
                    eventKey, 
                    keys = {
                            hidden: "visibilitychange",
                            webkitHidden: "webkitvisibilitychange",
                            mozHidden: "mozvisibilitychange",
                            msHidden: "msvisibilitychange"
                };
                for (stateKey in keys) {
                    if (stateKey in document) {
                        eventKey = keys[stateKey];
                        break;
                    }
                }
                return function(c) {
                    if (c) document.addEventListener(eventKey, c);
                    return !document[stateKey];
                }
            })();

            // check if current tab is active or not
            vis(function(){
                if(vis()){  
                    setTimeout(function(){  
                        // tween resume() code goes here   
                        if(typeof app.homeTimeline !== "undefined")
                            app.homeTimeline.resume();       
                        console.log("tab is visible - has focus");
                    },300);   
                } else {
                    // tween pause() code goes here
                    if(typeof app.homeTimeline !== "undefined")
                        app.homeTimeline.pause();
                    console.log("tab is invisible - has blur");    
                }
            });           
        },
        onMouseMove: function(event){
            event.preventDefault();
            if(app.isAnimating()){
                return;
            }else{
                var mouseX = ( event.clientX - window.innerWidth / 2 ) / 3;
                var mouseY = -1*( event.clientY - window.innerHeight / 2 ) / 3;
                $(".text").css({"transform":"skewX("+ -1*mouseX*0.01 +"deg) skewY("+ -1*mouseY*0.03 +"deg)"})
            }
        },
        resizeProjects: function(){
            var currProjArr   = app.currProjSet.projArr
            var menuPr        = _.pluck(currProjArr, 'menuPr')
            var projPr        = _.pluck(currProjArr, 'projPr')
            var homePr        = _.pluck(currProjArr, 'homePr')
            var bigRefPlane   = _.pluck(currProjArr, 'bigRefPlane')
            var smallRefPlane = _.pluck(currProjArr, 'smallRefPlane')            
            var planeZPos = 0;
            var menuPageText = new app.Views.MenuPageText();

            var planeWidth = window.innerWidth/4
            ,planeHeight = window.innerHeight/3.8        
            ,planePosArr = [
                {x:-1.5*planeWidth, y:0.5*planeHeight, z:0},
                {x:-0.5*planeWidth, y:0.5*planeHeight, z:0},
                {x: 0.5*planeWidth, y:0.5*planeHeight, z:0},
                {x: 1.5*planeWidth, y:0.5*planeHeight, z:0},
                {x:-1.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x:-0.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x: 0.5*planeWidth, y:-0.5*planeHeight, z:0},
                {x: 1.5*planeWidth, y:-0.5*planeHeight, z:0},
            ]
            ;
        
            $(".menu-css-container, .menu-container canvas").css("top", 0);                                                            

            if(app.isTablet()){
                console.log("Resize To Tab")
                planeWidth = window.innerWidth/2
                ,planeHeight = window.innerHeight/4        
                ,planePosArr = [
                    {x:-0.5*planeWidth, y: 1.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y: 1.5*planeHeight, z:0},                    
                    {x:-0.5*planeWidth, y: 0.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y: 0.5*planeHeight, z:0},
                    {x:-0.5*planeWidth, y:-0.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y:-0.5*planeHeight, z:0},
                    {x:-0.5*planeWidth, y:-1.5*planeHeight, z:0},
                    {x: 0.5*planeWidth, y:-1.5*planeHeight, z:0},
                ];
                $(".menu-css-container, .menu-container canvas").css("top", 250);                                                
            }else if(app.isMobile()){
                console.log("Resize To Mobile")
                if(app.currentRoute == "menu"){
                    //menuPageText.render(); 
                    $(".projListCon").css("opacity", 1);
                    $(".css-threed").css("visibility", "hidden");
                }
            }

            if(!app.isMobile()){
                //$("#projetsList .projListCon").remove()
                if(app.currentRoute == "menu"){
                    $(".css-threed").css("visibility", "visible");                    
                }
            }else{
                if(app.currentRoute == "menu"){
                    $(".css-threed").css("visibility", "hidden");                    
                }
            }

            if(app.isMobile() || app.isTablet()){
                if(app.currentRoute != "home"){
                    $("body").css("overflowY", "visible");                                
                }else{
                    $("body").css("overflowY", "hidden");                                
                }
            }else{                
                if(app.currentRoute != "projet"){                    
                    $("body").css("overflowY", "hidden");                                
                }else{
                    $("body").css("overflowY", "visible");                                
                }
            }

            app.camera.aspect = window.innerWidth / window.innerHeight;
            app.camera.fov = 2 * Math.atan( window.innerHeight / ( 2 * 1000 ) )*180/Math.PI;
            app.camera.updateProjectionMatrix();            

            //Adjust Renderers
            app.homeCSSRenderer.setSize( window.innerWidth, window.innerHeight );
            app.projectrenderer.setSize( window.innerWidth, window.innerHeight );
            app.menurenderer.setSize( window.innerWidth, window.innerHeight );        
            app.menuCSSRenderer.setSize( window.innerWidth, window.innerHeight );
            
            _.each(currProjArr, function(obj){
                app.homeCSSscene.remove(obj.homePr);
                app.projectscene.remove(obj.bigRefPlane);
                app.projectscene.remove(obj.smallRefPlane);
                app.menuscene.remove(obj.bigRefPlane);
                app.menuscene.remove(obj.smallRefPlane);
                app.menuCSSscene.remove(obj.menuPr.cssPr);
                if(app.isMobile()){
                    app.menuscene.remove(obj.menuPr.pl);
                }
            })

            _.each(currProjArr, function(obj, key){
                
                var smallplane = new THREE.Mesh(new THREE.BoxGeometry(planeWidth, planeHeight, 0), new THREE.MeshPhongMaterial({ wireframe:true, opacity:1, color:0x0000ff, side: THREE.FrontSide }));
                smallplane.position.set(planePosArr[key].x, planePosArr[key].y, planeZPos);
                smallplane.name = "Small Ref Plane";
                obj.smallRefPlane = smallplane;
                //app.menuscene.add(smallplane);
                
                var menuplane = obj.menuPr.pl;
                menuplane.position.set(planePosArr[key].x, planePosArr[key].y, planePosArr[key].z);
                
                for(var j = 0; j < 4; j++){
                    menuplane.geometry.vertices[j].set(
                        smallplane.geometry.vertices[j].x,
                        smallplane.geometry.vertices[j].y,
                        smallplane.geometry.vertices[j].z
                    );
                    menuplane.geometry.verticesNeedUpdate = true;
                }

                var cssPr = obj.menuPr.cssPr;
                cssPr.element.style.height = planeHeight + "px";
                cssPr.element.style.width = planeWidth + "px";  
                cssPr.position.x = planePosArr[key].x;
                cssPr.position.y = planePosArr[key].y;
                cssPr.position.z = planeZPos;
                
                if(!app.isMobile()){
                    app.menuscene.add(obj.menuPr.pl);
                    app.menuCSSscene.add(cssPr);
                }
                
                var refPlane = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0), new THREE.MeshPhongMaterial({ wireframe:true, opacity:1, color:0xff0000, side: THREE.FrontSide }))
                var imgAspect = obj.projPr.material.map.image.width/obj.projPr.material.map.image.height,
                windowAspect = window.innerWidth/window.innerHeight;
                var homePr = obj.homePr;
                if (windowAspect > imgAspect){
                    homePr.element.style.width = window.innerWidth + "px";
                    homePr.element.style.height = window.innerWidth/imgAspect + "px";
                    
                    refPlane.scale.x = window.innerWidth;
                    refPlane.scale.y = window.innerWidth/imgAspect;                
                }
                else{
                    homePr.element.style.width = window.innerHeight*imgAspect + "px";
                    homePr.element.style.height = window.innerHeight + "px";
                    
                    refPlane.scale.x = window.innerHeight*imgAspect;
                    refPlane.scale.y = window.innerHeight;                   
                }
                refPlane.updateMatrix(); 
                refPlane.geometry.applyMatrix( refPlane.matrix );
                refPlane.matrix.identity();
                refPlane.position.set( 0, 0, 0 );
                refPlane.rotation.set( 0, 0, 0 );
                refPlane.scale.set( 1, 1, 1 );
                //app.projectscene.add(refPlane);
                //app.menuscene.add(refPlane);
                
                homePr.position.set( 0, 0, 0 );
                app.homeCSSscene.add(homePr);

                obj.bigRefPlane = refPlane;
                for(var j = 0; j < 4; j++){
                    obj.projPr.geometry.vertices[j].set(
                        obj.bigRefPlane.geometry.vertices[j].x,
                        obj.bigRefPlane.geometry.vertices[j].y,
                        obj.bigRefPlane.geometry.vertices[j].z
                    );
                    obj.projPr.geometry.verticesNeedUpdate = true;
                }
                app.render();

            });
            var menuPageText = new app.Views.MenuPageText();
            menuPageText.render(); 

            if(app.isMobile()){
                $(".projListCon").css("opacity", 1);
            }
        },   
        insertTitle : function(titre){
            titre = $('<textarea />').html(titre).text();
            var tmpProjName = [];
            _.each(titre, function(obj, key){
                if(obj == "<")
                    tmpProjName[key] = '<br/>';
                else if(obj == " ")
                    tmpProjName[key] = '<span class="text">&nbsp;</span>';
                else if(!_.contains(["b","r","/",">"], obj))
                    tmpProjName[key] = '<span class="text">' + obj + '</span>';
            });
            return tmpProjName.join("");
        },
        addWebGLProjects : function(){
            
            // Initialize WebGL components
            var planeWidth = app.planeWidth
            ,planeHeight = app.planeHeight
            ,planePosArr = app.planePosArr
            ,planeZPos = 0
            ,camera = new THREE.PerspectiveCamera(2 * Math.atan( window.innerHeight / ( 2 * 1000 ) )*180/Math.PI, window.innerWidth / window.innerHeight, 1, 10000)
            ,homeCSSRenderer = new THREE.CSS3DRenderer()
            ,homeCSSscene = new THREE.Scene()
            ,projectrenderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
            ,projectscene = new THREE.Scene()
            ,menurenderer = new THREE.WebGLRenderer({antialias:true, alpha:true})
            ,menuscene = new THREE.Scene()
            ,menuCSSRenderer = new THREE.CSS3DRenderer()
            ,menuCSSscene = new THREE.Scene()
            ,self = this
            ;            
            // Set renderer sizes and attach to parents
            homeCSSRenderer.setSize(window.innerWidth, window.innerHeight);
            homeCSSRenderer.domElement.style.position = "absolute";
            homeCSSRenderer.domElement.style.top = "0";
            homeCSSRenderer.domElement.style.left = "0";
            homeCSSRenderer.domElement.className = "home-css-container";
            $(".home-container").append(homeCSSRenderer.domElement);

            projectrenderer.setSize(window.innerWidth, window.innerHeight);
            projectrenderer.domElement.style.position = "absolute";
            projectrenderer.domElement.style.top = "0";
            projectrenderer.domElement.style.left = "0";
            $(".project-container").append(projectrenderer.domElement);
            
            menurenderer.setSize(window.innerWidth, window.innerHeight);
            menurenderer.domElement.style.position = "absolute";
            menurenderer.domElement.style.top = "0";
            menurenderer.domElement.style.left = "0";
            $(".menu-container").append(menurenderer.domElement);   

            menuCSSRenderer.setSize(window.innerWidth, window.innerHeight);
            menuCSSRenderer.domElement.style.position = "absolute";
            menuCSSRenderer.domElement.style.top = "0";
            menuCSSRenderer.domElement.style.left = "0";
            menuCSSRenderer.domElement.className = "menu-css-container";
            $(".css-threed").append(menuCSSRenderer.domElement);
           
            camera.position.set(0, 0, 1000);
            //camera.position.set(0, 1000, 2500);                     
            //camera.rotateX(-0.4);
 
            //Adding lights to scenes
            var light = new THREE.HemisphereLight(0xffffff, 0xffffff)
            light.color.set(0xffffff);          
            homeCSSscene.add(light);

            light = new THREE.HemisphereLight(0xffffff, 0xffffff)
            light.color.set(0xffffff);
            projectscene.add(light);
          
            light = new THREE.HemisphereLight(0xffffff, 0xffffff)
            light.color.set(0xffffff);
            menuscene.add(light);
            
            //Adding all planes
            _.each(self.currProjSet.projArr, function (obj, key) {             
                
                // Big Reference planes
                var bigRefPlane = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0), new THREE.MeshPhongMaterial({ wireframe:true, opacity:1, color:0xff0000, side: THREE.FrontSide }))
                bigRefPlane.name = "Big Ref Plane";
                obj.bigRefPlane = bigRefPlane;

                // Small Reference planes
                var smallRefPlane = new THREE.Mesh(new THREE.BoxGeometry(planeWidth, planeHeight, 0), new THREE.MeshPhongMaterial({ wireframe:true, opacity:1, color:0x0000ff, side: THREE.FrontSide }));
                smallRefPlane.position.set(planePosArr[key].x, planePosArr[key].y, planeZPos);
                smallRefPlane.name = "Small Ref Plane";
                obj.smallRefPlane = smallRefPlane;

                // Project WebGL projects
                var bigWebGLplane = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0), new THREE.MeshPhongMaterial({ transparent:true, opacity:1, map: obj.texture, side: THREE.FrontSide }));                              

                // Setting aspect from original texture
                var imgAspect = bigWebGLplane.material.map.image.width/bigWebGLplane.material.map.image.height,
                windowAspect = window.innerWidth/window.innerHeight;

                // Home CSS projects
                var homeDiv = document.createElement('div');
                homeDiv.style.background = "url("+obj.background+")";
                homeDiv.style.backgroundSize = "contain";
                homeDiv.style.opacity = 0;
                homeDiv.className = 'home-bg';
                
                var homeEl = new THREE.CSS3DObject(homeDiv);
                homeEl.position.set(0, 0, planeZPos);

                // Setting correct sizes
                if (windowAspect > imgAspect){
                    //Project planes
                    bigWebGLplane.scale.x = window.innerWidth;
                    bigWebGLplane.scale.y = window.innerWidth/imgAspect;
                    
                    //Home planes
                    homeDiv.style.width = window.innerWidth + "px";
                    homeDiv.style.height = window.innerWidth/imgAspect + "px"; 

                    //Big Ref Planes
                    bigRefPlane.scale.x = window.innerWidth;
                    bigRefPlane.scale.y = window.innerWidth/imgAspect;               
                }
                else{                   
                    homeDiv.style.width = window.innerHeight*imgAspect + "px";
                    homeDiv.style.height = window.innerHeight + "px";                   
                    
                    bigWebGLplane.scale.x = window.innerHeight*imgAspect;
                    bigWebGLplane.scale.y = window.innerHeight;

                    bigRefPlane.scale.x = window.innerHeight*imgAspect;
                    bigRefPlane.scale.y = window.innerHeight;
                }
                
                bigRefPlane.updateMatrix(); 
                bigRefPlane.geometry.applyMatrix( bigRefPlane.matrix );
                bigRefPlane.matrix.identity();
                bigRefPlane.position.set( 0, 0, 0 );
                bigRefPlane.rotation.set( 0, 0, 0 );
                bigRefPlane.scale.set( 1, 1, 1 );

                bigWebGLplane.updateMatrix(); 
                bigWebGLplane.geometry.applyMatrix( bigWebGLplane.matrix );
                bigWebGLplane.matrix.identity();
                bigWebGLplane.position.set( 0, 0, 0 );
                bigWebGLplane.rotation.set( 0, 0, 0 );
                bigWebGLplane.scale.set( 1, 1, 1 );

                
                //Adding planes to scenes               
                //Home
                homeCSSscene.add(homeEl);
                obj.homePr = homeEl;
                
                //Project
                // projectscene.add(bigRefPlane);
                projectscene.add(bigWebGLplane);
                obj.projPr = bigWebGLplane;     

                //For Menu -> Base Element
                var menuEl = $(".projListCon")[key];

                if(app.isMobile()){
                    console.log(menuEl)
                }else{
                    $(menuEl).find(".white-layer").css({
                        background : "none"
                    });                   
                    $(menuEl).find(".projetsDetails").css({
                        background:"none"
                    });
                }                

                //Menu WebGL projects
                var smallWebGLplane = new THREE.Mesh(new THREE.BoxGeometry(window.innerWidth, window.innerHeight, 0), new THREE.MeshPhongMaterial({ transparent:true, opacity:0, map: obj.texture, side: THREE.FrontSide }));
                
                //Menu CSS projects            
                var menuDiv = new THREE.CSS3DObject(menuEl);
                
                menuEl.style.height = planeHeight + "px";
                menuEl.style.width = planeWidth + "px";  
                menuDiv.position.x = planePosArr[key].x;
                menuDiv.position.y = planePosArr[key].y;
                menuDiv.position.z = planeZPos;
                
                //Menu Planes
                for(var j = 0; j < 4; j++){
                    smallWebGLplane.geometry.vertices[j].set(
                        smallRefPlane.geometry.vertices[j].x,
                        smallRefPlane.geometry.vertices[j].y,
                        smallRefPlane.geometry.vertices[j].z
                    );
                }                
                smallWebGLplane.position.set(planePosArr[key].x, planePosArr[key].y, planePosArr[key].z);                    

                //Menu
                //menuscene.add(smallRefPlane);
                menuscene.add(smallWebGLplane);
                menuCSSscene.add(menuDiv);

                obj.menuPr = {
                    pl:smallWebGLplane,
                    el:menuEl,
                    cssPr:menuDiv
                }
            });

            self.homeCSSRenderer = homeCSSRenderer;
            self.projectrenderer = projectrenderer;
            self.homeCSSscene = homeCSSscene;
            self.projectscene = projectscene;
            self.menuCSSRenderer = menuCSSRenderer;
            self.menurenderer = menurenderer;
            self.menuCSSscene = menuCSSscene;
            self.menuscene = menuscene;
            self.camera = camera;
            app.render();

        },
        startWebGLAnimation : function(anim){
            switch(anim){
                case 'menu':
                case 'menuToProj':
                    TweenLite.ticker.addEventListener("tick", this.renderMenu, this);
                break;

                case 'projToProj':
                case 'projToMenu':
                    TweenLite.ticker.addEventListener("tick", this.renderProj, this);
                break;
            }
        },
        stopWebGLAnimation : function(anim){
            switch(anim){
                case 'menu':
                case 'menuToProj':
                    TweenLite.ticker.removeEventListener("tick", this.renderMenu, this);
                break;

                case 'projToProj':
                case 'projToMenu':
                    TweenLite.ticker.removeEventListener("tick", this.renderProj, this);
                break;
            }
        },
        renderMenu:function(){
            this.menurenderer.render(this.menuscene, this.camera);
        },
        renderProj:function(){
            if(typeof this.planeToAnim !== "undefined")
                this.planeToAnim.geometry.verticesNeedUpdate = true;
            this.projectrenderer.render(this.projectscene, this.camera);
        },
        render: function(){
            this.projectrenderer.render(this.projectscene, this.camera);
            this.homeCSSRenderer.render(this.homeCSSscene, this.camera);
            if(typeof this.menurenderer !== "undefined"){
                this.menurenderer.render(this.menuscene, this.camera);
            }
            if(typeof this.menuCSSRenderer !== "undefined"){
                this.menuCSSRenderer.render(this.menuCSSscene, this.camera);
            }
        }, 
        createHomeTl: function(){            
            if(typeof app.homeTimeline !== "undefined"){
                app.homeTimeline.restart();
                app.homeTimeline.pause();
                app.homeTimeline.seek(0).kill();
                delete app.homeTimeline;
            }
            
            var homeTimeLine = new TimelineMax({
                onStart: function(){
                    //console.log("started")
                },
                onComplete:homeTlCpl,
                onCompleteParams:["{self}"]
            });
            
            function homeTlCpl(tl){
                setTimeout(function(){
                    tl.restart();
                }, 3000)
            }

            _.each(app.currProjSet.projArr, function(obj, key){
                var label = "label_" + key
                ,exitLabel = "exitLabel_" + key
                ;       

                homeTimeLine
                .set(".home-bg", {css:{opacity:0}})
                .add(label)
                .to($(".home-bg")[key], 1, {opacity:1}, label)
                .to($("a.projectTrigger")[key], 1, {bottom:20}, label)
                .to($("#projetsReview div.projetsDetails")[key], 1, {height:140}, label)
                .to($("#projetsReview path")[key], 0.7, {strokeDashoffset:0}, label + "+=0.5")
                .to($("#projetsReview .project-info")[key], 1, {opacity:1, left:0}, label + "+=0.6")
                .add(exitLabel, label + "+=3")
                .to($("a.projectTrigger")[key], 1.5, {bottom:0}, exitLabel)
                .to($("#projetsReview div.projetsDetails")[key], 0.5, {height:0}, exitLabel + "+=1")
                .to($("#projetsReview path")[key], 0.7, {strokeDashoffset:50}, exitLabel + "+=0.3")
                .to($("#projetsReview .project-info")[key], 0.7, {opacity:0, left:10}, exitLabel + "+=0.5")
                .to($(".home-bg")[key], 0.2, {opacity:0})
                ;
            });
            
            app.homeTimeline = homeTimeLine;
        },
        createProfileTl: function(){
            function revCpl(tl){
                tl.restart();
                tl.pause();        
                if(app.currentRoute != "projet"){
                    TweenMax.set($(".projetContent"), {css:{display: "none"}} )
                }else{
                    if(app.isMobile() || app.isTablet()){
                        TweenMax.set("body", {css:{overflowY: "hidden"}})      
                    }else{
                        TweenMax.set("body", {css:{overflowY: "visible"}})      
                    }
                    TweenMax.set($(".projetContent"), {clearProps: "display"} )
                }       
                setTimeout(function(){
                    TweenMax.set(".projetNav", {css:{opacity:1}})
                }, 500)
            }

            function showCloseBtn(){
                TweenMax.to("#close-profile", 0.5, {opacity:1})
            }

            function tlCpl(tl){
                TweenMax.set($(".projetContent"), {clearProps:"display"})
                TweenMax.set($(".projetContent"), {css:{display: "none"}})      
                TweenMax.set(".projetNav", {css:{opacity:0}})
                if(app.isMobile() || app.isTablet()){
                    TweenMax.set("body", {css:{overflowY: "visible"}})      
                }else{
                    TweenMax.set("body", {css:{overflowY: "hidden"}})      
                }
            }

            var tl = new TimelineMax({
                onComplete:tlCpl,
                onCompleteParams:["{self}"],
                onReverseComplete:revCpl,
                onReverseCompleteParams:["{self}"]
            });
            
            tl
            .to([".main", ".css-threed"], 0.1, {clearProps:"display"})
            .to(".body", 0.1, {clearProps:"overflowY"})
            .to(".profile-content", 0.1, {display:"block", zIndex:5})
            .add("showSq")
            .to(".profile-square", 0.5, {opacity:1}, "showSq")

            if(app.isMobile()){
                tl.staggerTo(_.shuffle($(".profile-inner").slice()), 0.3, {
                    width:"100%", 
                    padding:"5%",
                    ease:Expo.easeOut
                }, 0.07, "showSq" ,showCloseBtn, [])
            }else{
                tl.staggerTo(_.shuffle($(".profile-inner").slice()), 0.3, {
                    width:"100%", 
                    padding:"10%",
                    ease:Expo.easeOut
                }, 0.07, "showSq" ,showCloseBtn, [])
            }
            tl.add("showProf", 1.5)
            .to(".inner-text", 0.5, {opacity:1}, "showProf")
            .to("body", 0.1, {overflowY: "hidden"}, "showProf")      
            .to([".main", ".css-threed"], 0.1, {display:"none"}, "showProf")
            ;

            tl.stop();

            app.profileTl = tl;
        },
        createScrollTl: function(){
            var scrollController = new ScrollMagic.Controller()
            ,scrollGroups = [
                [".clientBox", $(".rightBox")[0]],
                [".leftBox", ".projetBox"],
                [".fullBox1"],
                [".resultatBox", ".resultatBoxRight"],
                [".resultatBoxLogoLeft", ".resultatBoxLogoCenter", ".resultatBoxLogoRight"],
                [".resultatBoxLogoFull"],
                [".resultatBoxFull"],
                [".resultatBox1", $(".rightBox")[1]]
            ]
            ,tl
            ,scene
            ,index
            ;

            function insertProjVideo(parent){
                $(parent).find(".screen-video").append(app.currentProject.videoEl);
            }

            scene = new ScrollMagic.Scene({
                triggerElement: "#trigger1",
                triggerHook: 0
            })
            .setTween(".projetNav", 0.01, {position:"fixed", zIndex:4})
            //.addIndicators({name: "for fixing nav (duration: none)"})
            .addTo(scrollController)

            _.each(scrollGroups, function(obj, key){
                index = key + 1
                ,tl = new TimelineMax()
                ,scene = new ScrollMagic.Scene({
                    triggerElement: "#trigger" + index
                })

                switch(obj.length){
                    case 1: 
                        tl.to(obj[0], 0.5, {
                            top:0, 
                            opacity: 1,
                            onComplete: function(){
                                if(obj[0] == ".resultatBoxFull" && $(obj[0]).find("iframe").length == 0 ){
                                    insertProjVideo(obj[0]);
                                }
                            }
                        }); 
                        break;
                    case 2: 
                        tl
                        .add("enter1")
                        .to(obj[0], 0.5, {top:0, opacity: 1}, "enter1")
                        .add("enter2", "enter1+=0.3")
                        .to(obj[1], 0.5, {top:0, opacity: 1}, "enter2")
                        
                        var line1 = $(obj[0]).find(".line-down")
                        ,line2 = $(obj[1]).find(".line-down")
                        ,num1 = $(obj[0]).find(".contentNumber")
                        ,num2 = $(obj[1]).find(".contentNumber")
                        ;
                        if(line1.length > 0){
                            tl
                            .to(line1, 0.5, {width:10}, "enter1+=0.2")
                            .to(num1, 0.5, {top:40}, "enter1+=0.2")
                        }
                        if(line2.length > 0){
                            tl
                            .to(line2, 0.5, {width:10}, "enter2+=0.2")
                            .to(num2, 0.5, {top:40}, "enter2+=0.2")
                        }
                        break;
                    case 3: 
                        tl
                        .add("enter")
                        .to(obj[0], 0.5, {top:0, opacity: 1}, "enter")
                        .to(obj[1], 0.5, {top:0, opacity: 1}, "enter+=0.2")
                        .to(obj[2], 0.5, {top:0, opacity: 1}, "enter+=0.4")
                        break;
                }
                
                scene
                .setTween(tl)
                //.addIndicators({name: index + " (duration: 0.5)"})
                .addTo(scrollController)
            });
        },
        createMenuTl: function(){
            var currProjArr = app.currProjSet.projArr
            ,self = this
            ,menuTimeline = new TimelineMax({
                onComplete:function(){                    
                    self._resetProjects();
                                                
                    var mainView = new app.Views.MainView();
                    mainView.render(); 
                    var menuPageText = new app.Views.MenuPageText();
                    menuPageText.render();
                    if(app.isMobile()){
                        $(".projListCon").css("opacity", 1);
                    }else{
                    }
                    app.stopWebGLAnimation('menu')
                }
            });            
            
            menuTimeline
            .to($(".burger li"), 0.3, {opacity:0}, "enterProj")                                        
            ;
            
            if(app.isMobile()){
                menuTimeline
                .staggerTo(".main .projListCon", 0.5, {opacity:1}, 0.05, "enterProj")            
                .to(".projListCon .text", 0.5, {opacity:1, y:0, color:"rgba(0, 0, 0, 1)"}, "enterProj")            
                .to($(".burger #menu-line1"), 0.5, {top:4, left:8, y:4, width:25, rotationZ:0}, "enterProj")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "enterProj")
                .to($(".burger #menu-line3"), 0.5, {top:20, left:8, y:6, width:25, rotationZ:0}, "enterProj")
            }else{
                var menuProjects = _.pluck(app.currProjSet.projArr, 'menuPr');
                var menuPlanes = _.pluck(menuProjects, 'pl');
                var menuMaterials = _.pluck(menuPlanes, 'material');
                app.startWebGLAnimation('menu')                

                if($(".matched").length > 0){
                    TweenMax.to(".matched", 0.5, {opacity:0})            
                    TweenMax.to(".project-container", 1, {opacity:0})            
                }

                menuTimeline
                .staggerTo(".css-threed .projListCon", 0.5, {opacity:1}, 0.05, "enterProj")            
                .to(".projListCon .text", 0.5, {opacity:1, y:0, color:"rgba(0, 0, 0, 0.1)"}, "enterProj")            
                .to($(".burger #menu-line1"), 0.5, {top:6, left:8, y:4, width:25, rotationZ:0}, "enterProj")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "enterProj")
                .to($(".burger #menu-line3"), 0.5, {top:18, left:8, y:6, width:25, rotationZ:0}, "enterProj")
                TweenMax.staggerTo(menuMaterials, 0.5, {opacity:0.2}, 0.05)            
            }

            app.menuTimeline = menuTimeline;
        },
        _resetMenu:function(){
            if(app.isMobile()){                    
            }else{
                _.each(app.currProjSet.projArr, function (obj, key) { 
                    obj.menuPr.pl.material.opacity = 0;
                    for(var j = 0; j < 4; j++){
                        obj.menuPr.pl.position.set(obj.smallRefPlane.position.x, obj.smallRefPlane.position.y, obj.smallRefPlane.position.z);
                        obj.menuPr.pl.geometry.vertices[j].set(
                            obj.smallRefPlane.geometry.vertices[j].x,
                            obj.smallRefPlane.geometry.vertices[j].y,
                            obj.smallRefPlane.geometry.vertices[j].z,
                        );
                        obj.menuPr.pl.geometry.verticesNeedUpdate = true;
                        app.renderMenu();
                    }
                });
            }
        },
        _resetProjects:function(){
            _.each(app.currProjSet.projArr, function (obj, key) {  
                obj.projPr.position.set(obj.bigRefPlane.position.x, obj.bigRefPlane.position.y, obj.bigRefPlane.position.z);
                for(var j = 0; j < 4; j++){
                    obj.projPr.geometry.vertices[j].set(
                        obj.bigRefPlane.geometry.vertices[j].x,
                        obj.bigRefPlane.geometry.vertices[j].y,
                        obj.bigRefPlane.geometry.vertices[j].z,
                    );
                    obj.projPr.geometry.verticesNeedUpdate = true;
                    app.renderProj();
                }
                obj.projPr.material.opacity = 1;
            });
            if(app.isTablet()){
                $(".project-container canvas").css("top", 0);                                                        
            }
        },
        createProjectTl: function(){
            var projTimeLine = new TimelineMax({
                onComplete:function(){
                    app.createScrollTl();
                    app._resetMenu();                    
                }
            })
            ,time = 1
            ,currReview = $("#projetsReview div.projetsDetails")[app.currentProject.currIndex]
            ;

            projTimeLine
            .add("enter")
            .to($(".project-container"), 1, {opacity:1}, "enter")            
            .to(currReview, time, {height:140}, "enter")
            .to($(currReview).find("path"), time, {stroke:"#fff", strokeDashoffset:0}, "enter+=0.3")
            .to(".proj-title", time, {opacity:1}, "enter+=0.3")
            .to($(currReview).find(".project-info"), time, {opacity:1, left:0}, "enter+=0.6")
            .to([".arrow-down-rect", "svg#top-svg", "svg#bottom-svg"], time, {strokeDashoffset:0}, "enter+=0.6")
            .to("body", time/100, {overflowY:"visible"})
            .to("#projetsReview div.projetsDetails", 0.1, {overflowY:"hidden"})
            ;

            app.projTimeline = projTimeLine;
        },      
        areTitlesInPara : function(para){
            var matches = []
            ,tempArr = []
            ,paraArr = []
            ,ready = true
            ,pos = 0
            ,i = -1
            ,tempPr
            ,tempEl
            ,self = this
            ;            

            _.each(para, function(obj){
                paraArr.push({value:obj, matched:false});
            });

            _.every(app.projects, function(arrObj, arrKey) {
                arrObj.letter = arrObj.titre.charAt(0);
                matches = [], count = 1, tempObj = {};
                tempArr.length = 0;
                matches = _.filter(paraArr, function(obj, key){
                    tempObj = {
                        value : obj.value,
                        matched : obj.matched,
                        url : "",
                        toInsert : true,
                        toShow : false
                    }
                    if(tempObj.matched){
                        tempObj.url = obj.url;
                        tempObj.pos = obj.pos;
                    }
                    if(tempObj.value == arrObj.letter && !tempObj.matched && count == 1){
                        tempObj.matched = true;
                        tempObj.url = arrObj.url;
                        count++;
                    }
                    tempArr.push(tempObj);
                    return tempObj.value == arrObj.letter;
                });
                paraArr = tempArr.slice();
                if(matches.length == 0){
                    ready = false;
                }
                return matches.length != 0;
            });

            while(pos != -1){
                pos = para.indexOf("<br/>", i + 1);
                i = pos;
                if(pos!= -1){
                    paraArr[pos].value = "<br/>";
                    paraArr[pos+1].toInsert = false;
                    paraArr[pos+2].toInsert = false;
                    paraArr[pos+3].toInsert = false;
                    paraArr[pos+4].toInsert = false;
                }
            }
            if(ready){
                app.paraArr = paraArr;
                return paraArr;
            }
            else
                console.log("Not Matching");
        },
        getHomePara : function(paraArr){
            var finalPara = []
            ,projArr = []
            ;

            _.each(paraArr, function(obj){
                if(obj.matched){
                    tempEl = '<span class="text"><a href="#!/projets/' + obj.url + '" class="projectTrigger" >' + obj.value + '</a></span>';
                    tempPr = _.filter(app.projects, function(pr){
                        return pr.url == obj.url; 
                    })[0]
                    tempPr.firstLetter = tempPr.titre[0];
                    finalPara.push(tempEl);
                    projArr.push(tempPr);                   
                }else if(obj.value=="<br/>"){
                    finalPara.push("<br/>");
                }else if(obj.toInsert){
                    finalPara.push("<span class='text'>" + obj.value + "</span>");
                }
            });

            return {
                para: finalPara.join(""),
                //para: para,
                projArr: projArr
            };
        },
        prepareHomeCSS : function(){
            
            $("body").css("overflow-y", "hidden");
            $(".main").css({
                backgroundColor: "rgba(255,255,255,0.7)"
            })
            $(".webGL, .outer.css-threed").css({
                opacity:0
            })
            $(".outer.css-threed").css({
                visibility:"hidden"
            })
            $(".webGL.home-container").css({
                opacity:1
            })
            $("#projetsReview").css({
                visibility: "visible"
            })
            if(app.isTablet()){
                $(".menu-css-container, .menu-container canvas").css("top", 250);                                
            }
        },
        prepareMenuCSS : function(){
            $("body").css({
                overflowY:"hidden"
            });
            $(".webGL, .projListCon").css({
                opacity:0
            })
            $(".outer.css-threed").css({
                visibility:"visible",
                opacity:1
            })
            $(".webGL.menu-container").css({
                opacity:1
            })
            $(".main").css({
                backgroundColor: "rgba(0,0,0,0)"
            })
            $("#projetsReview").css({
                visibility: "hidden"
            })    
            if(app.isMobile()){
                $("body").css({overflowY:"visible"});                
                $(".outer.css-threed").css({
                    visibility: "hidden"
                })               
            }else if(app.isTablet()){
                $("body").css({overflowY:"visible"});
                $(".menu-css-container, .menu-container canvas").css("top", 250);                                
            }
        },
        prepareProjCSS : function(){
            var currProjPlane = _.filter(app.currProjSet.projArr, function(obj, key){
                return key == app.currentProject.currIndex
            });

            _.each(app.currProjSet.projArr, function(obj){
                obj.projPr.material.opacity = 0;
            })

            if(currProjPlane.length > 0){
                currProjPlane[0].projPr.material.opacity = 1;
                app.renderProj();
            }     

            $(".outer.css-threed").css({
                visibility:"hidden"
            })
            $(".webGL, .outer.css-threed").css({
                opacity:0
            })
            $(".webGL.project-container").css({
                opacity:1
            })
            $(".main").css({
                backgroundColor: "rgba(0,0,0,0.5)"
            })
            $(".text").css({
                color: "#fff"
            })
            $(".back-container, .arrow-down").css({
                visibility: "visible"
            })
            $(".header, #projetsReview, .profile").css({
                color:"#fff",
                borderBottomColor:"#fff"
            })
            $(".header-el .menu-line, .header-el .burger li").css({
                backgroundColor:"#fff"
            })
            $("#social-icons").css({
                borderTopColor:"#fff"
            })
            $("#nav .social").css({
                borderColor:"#ccc"
            })
            $("#nav .social i").css({
                color:"#ccc"
            })
            $(".header img").css({
                filter:"invert(100%)"
            })
            $("#projetsList").css({
                visibility: "hidden"
            })
            $(".projListCon .text").css({
                color: "rgba(0,0,0,0)"
            })
            if(app.isTablet()){
                $(".menu-css-container, .menu-container canvas").css("top", 250);                                
            }
        },
        reorderProjects: function(){
            var planeWidth = app.planeWidth
            ,planeHeight = app.planeHeight
            ,planePosArr = app.planePosArr
            ,currProjArr = app.currProjSet.projArr
            self = this
            ;

            //Clear Home and Menu Scenes
            _.each(currProjArr, function(obj, key){
                app.menuscene.remove(obj.menuPr);
                app.menuCSSscene.remove(obj.cssPr);
                app.homeCSSscene.remove(obj.homePr);
            });

            _.each(currProjArr, function(obj, key){                
                //Reorder Menu page projects
                obj.menuPr.pl.position.set(obj.smallRefPlane.position.x,obj.smallRefPlane.position.y,obj.smallRefPlane.position.z)
                obj.menuPr.cssPr.position.set(obj.smallRefPlane.position.x,obj.smallRefPlane.position.y,obj.smallRefPlane.position.z)
                app.menuscene.add(obj.menuPr.pl);
                app.menuCSSscene.add(obj.menuPr.cssPr);
                
                //Reorder Home page projects
                app.homeCSSscene.add(obj.homePr);
            });

            app.render();
        },
        isAnimating : function(){
            var returnObj = false;
            if(!(typeof app.homeToMenuTl === "undefined")){
                if(app.homeToMenuTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.homeToProjTl === "undefined")){
                if(app.homeToProjTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.projToHomeTl === "undefined")){
                if(app.projToHomeTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.projToMenuTl === "undefined")){
                if(app.projToMenuTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.menuToProjTl === "undefined")){
                if(app.menuToProjTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.menuToHomeTl === "undefined")){
                if(app.menuToHomeTl._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.menuTimeline === "undefined")){
                if(app.menuTimeline._active){
                    returnObj = true;
                }
            }
            if(!(typeof app.projTimeline === "undefined")){
                if(app.projTimeline._active){
                    returnObj = true;
                }
            }
            return returnObj;
        }
    };

    $(function() {
        window.app.init();           

        $(".css-threed").swipe({
            swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
                if(app.isMobile()){
                    var yPos = app.camera.position.y
                    ,lowerBound = 0
                    ,upperBound = -1*(app.planePosArr.length - 2)*app.planeHeight
                    ;
                    app.startWebGLAnimation('menu');
                    switch(currentDirection){
                        case "up":
                            yPos -= distance;
                            if(yPos < upperBound){
                                yPos = upperBound;
                            }
                        break;

                        case "down":
                            yPos += distance;
                            if(yPos > lowerBound){
                                yPos = lowerBound;
                            }
                        break;
                    }
                    TweenMax.to(app.camera.position, 0.2, {
                        y:yPos,
                        onComplete: function(){
                            app.stopWebGLAnimation('menu');                        
                        }
                    });
                }
            }
        });     

        $(document).on("mouseenter", ".projListCon", function(e){ 
            if(app.isAnimating()){
                return;
            }else{
                e.preventDefault();
                TweenMax.to($(e.currentTarget).find(".text"), 0.5, {top:-20})
            }
        });

        $(document).on("mouseleave", ".projListCon", function(e){ 
            if(app.isAnimating()){
                return;
            }else{
                e.preventDefault();
                TweenMax.to($(e.currentTarget).find(".text"), 0.5, {top:0})
            }
        });

        $(document).on("click", ".projListCon", function(e){ 
            e.preventDefault();
            TweenMax.to($(e.currentTarget).find(".text"), 0.5, {
                top:0,
                onComplete: function(){
                    Backbone.history.navigate($(e.currentTarget).find(".menuProjLink")[0].hash, {trigger:true})
                }
            })
        });

        $(document).on('click', ".profile", function(e){   
            e.preventDefault();
            app.profileTl.play();
        })

        $(document).on("click", ".mobile-profile-btn", function(e){
            e.preventDefault();
            app.profileTl.play();
            
        });  

        $(document).on('click', "#close-profile", function(e){   
            e.preventDefault();   
            TweenMax.to("#close-profile", 0.5, {rotationZ:180, opacity:0})
            app.profileTl.reverse();
        })

        $(document).on('mouseenter', "#close-profile", function(e){
            TweenMax.to($(this), 0.7, {
                width:55,  
                height:55,
                border:"2px solid #ccc",    
                rotationZ:90,             
                ease:Power2.easeOut
            })
            TweenMax.to($(".close-top"), 0.5, {
                top:1,
            })
            TweenMax.to($(".close-bottom"), 0.5, {
                top:-1,
            })
        })

        $(document).on('mouseleave', "#close-profile", function(e){
            TweenMax.to($(this), 0.7, {
                width:45,  
                height:45,
                border:"4px solid #ccc",
                rotationZ:0,
                ease:Power2.easeOut
            })
            TweenMax.to($(".close-top"), 0.5, {
                top:1,
            })
            TweenMax.to($(".close-bottom"), 0.5, {
                top:-1,
            })
        })
    });

    app.Router = Backbone.Router.extend({

        routes: {
          '': 'home',
          '!/menu': 'menu',
          '!/projets/:projet': 'projet'
        },
        home: function () {            
            var view = new app.Views.Home();
            app.instance.goto(view);          
        },

        menu: function () {
            var view = new app.Views.Menu();
            app.instance.goto(view);
        },

        projet: function (url) {                    
            var currProjArr = app.currProjSet.projArr;
            app.currentProject = _.filter(currProjArr, function(obj, key){
                return obj.url == url;
            })[0];

            app.currentProject.currIndex = currProjArr.indexOf(app.currentProject);
            app.currentProject.origIndex = app.projects.indexOf(app.currentProject);          

            var view = new app.Views.Projet();
            app.instance.goto(view);            
        }

    });

    app.Extensions.View = Backbone.View.extend({
        initialize: function () {
            this.router = new app.Router();
        },
        render: function(options) {
            options = options || {};
            if (options.page === true) {
              this.$el.addClass('page');
            }
            return this;
        }
    });

    app.Views.App = app.Extensions.View.extend({
        el: 'body',
        goto: function (view) {           
            var previous = this.currentPage || null;
            var next = view;
            if (previous) {
                //All subsequent loads
                this._animateFromTo(previous, next, this);               
            }else{
                //First Time load          
                this._prepareAssets(next, this);
            }          
        },
        _prepareAssets: function(view, ctx){
            var manager = new THREE.LoadingManager()
            ,texloader = new THREE.TextureLoader(manager)
            ,tex
            ,prog = { value:0 }
            ;
            _.each(app.currProjSet.projArr, function(obj){
                tex = texloader.load(obj.background);
                tex.minFilter = THREE.NearestFilter;
                //tex.magFilter = THREE.LinearMipMapLinearFilter;
                //tex.minFilter = THREE.LinearMipMapLinearFilter;
                obj.texture = tex;
            });
            
            var loaderTl = new TimelineMax();

            manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
                //console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            };

            manager.onLoad = function () {

                var headerView = new app.Views.HeaderView();
                headerView.render();

                var mainView = new app.Views.MainView();
                mainView.render();                            
                
                var menuPageText = new app.Views.MenuPageText();
                menuPageText.render();    

                app.addWebGLProjects();
                
                var menuPageText = new app.Views.MenuPageText();
                menuPageText.render();    

                app.createProfileTl();
                
                app.currentRoute = $(view.el)[0].className;
                switch(app.currentRoute){
                    case 'home':
                        //Render Home - home specific css and js  
                        var homePageText = new app.Views.HomePageText();
                        homePageText.render();

                        var reviews = new app.Views.ProjetReview();
                        reviews.render();
                        
                        app.prepareHomeCSS();
                        break;
                    case 'menu':
                        //Render Menu
                      
                        app.prepareMenuCSS();
                        break;
                    case 'projet':
                        //Render Project
                        var projPageText = new app.Views.ProjectPageText();
                        projPageText.render();

                        var reviews = new app.Views.ProjetReview();
                        reviews.render();
                        
                        app.prepareProjCSS();
                        break;
                }
                view.render({ page: true });
                ctx.$el.append( view.$el );
                ctx.currentPage = view;                
                
                loaderTl.play();

            };

            manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
                //console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
                var prog = {value:itemsLoaded/itemsTotal*100};
                var completed = true;
                loaderTl
                .to(".progress-inner", 0.5,  {
                    width:prog.value + "%",
                    onUpdate:function(){
                        $("#progress").html(parseInt(prog.value) + " %");
                        if(prog.value == 100 && completed){
                            completed = false;
                            setTimeout(function(){
                                TweenMax.to(".loader", 0.5, {
                                    opacity:0,
                                    onComplete: function(){
                                        $(".loader").hide();
                                        if($(view.el).hasClass('home')){
                                            //Animate Home  
                                            app.createHomeTl();
                                        }else if($(view.el).hasClass('menu')){
                                            //Animate Menu
                                            app.createMenuTl();
                                        }else if($(view.el).hasClass('projet')){
                                            //Animate Project
                                            app.createProjectTl();
                                        }
                                    }
                                })
                            }, 1000)
                            console.log("Timeline Complete!")
                        }
                    }
                })
            };

            manager.onError = function ( url ) {
                console.log( 'There was an error loading ' + url );
            };
        },
        _animateFromTo : function(previous, next, ctx){
            if($(previous.el).hasClass('home')){
                //From Home
                console.log("//From Home");
                if($(next.el).hasClass('menu')){
                    //To Menu
                    app.currentRoute = 'menu';
                    console.log("//To Menu");
                    app.homeTimeline.restart();
                    app.homeTimeline.pause();
                    app.homeTimeline.seek(0).kill();
                    this._animateHomeToMenu(previous, next, ctx);                   
                }else if($(next.el).hasClass('projet')){
                    //To Project                  
                    app.currentRoute = 'projet';
                    app.homeTimeline.pause();
                    console.log("//To Project");
                    this._animatehomeToProj(previous, next, ctx);                   
                }else{
                    //To Home
                    console.log("//To Home");
                    app.homeTimeline.restart();
                    app.homeTimeline.pause();
                    app.homeTimeline.seek(0).kill();
                    this._randomizeHome(previous, next, ctx);                   
                }
            }else if($(previous.el).hasClass('menu')){
                //From Menu
                console.log("//From Menu");
                if($(next.el).hasClass('home')){
                    //To Home
                    app.currentRoute = 'home';
                    console.log("//To Home");
                    this._animateMenuToHome(previous, next, ctx);                   
                }else if($(next.el).hasClass('projet')){
                    //To Project                  
                    app.currentRoute = 'projet';
                    console.log("//To Project");
                    this._animateMenuToProject(previous, next, ctx);                   
                }
            }else{
                //From Project
                console.log("//From Project");
                if($(next.el).hasClass('home')){
                    //To Home
                    app.currentRoute = 'home';
                    console.log("//To Home");
                    this._animateProjectToHome(previous, next, ctx);                   
                }else if($(next.el).hasClass('menu')){
                    //To Menu                  
                    app.currentRoute = 'menu';
                    console.log("//To Menu");
                    this._animateProjectToMenu(previous, next, ctx);                   
                }else{
                    //To Project                  
                    app.currentRoute = 'projet';
                    console.log("//To Project");
                    this._animateNextProject(previous, next, ctx);                   
                }
            }
        },
        _randomizeHome : function(previous, next, ctx){

            var paraArrCopy = app.initParaArr.slice();
            paraArrCopy.splice(app.currentParaIdx, 1);
            var tempPara = paraArrCopy[Math.floor(Math.random() * paraArrCopy.length)];

            app.currProjSet = app.getHomePara(app.areTitlesInPara(tempPara));
            app.ghostText = app.currProjSet.para;
            app.currentParaIdx = app.initParaArr.indexOf(tempPara);
            
            var titrePosArr = []
            ,matchedElArr = []
            ,posArr = []
            ,ghostTextView = new app.Views.GhostText()
            ,self = this
            ;

            ghostTextView.render();
            _.each($("#ghost-text .text"), function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).position(),
                    matched : false,
                    linkMatched : false
                }
                if($(obj).find("a").length){
                    tempObj.linkMatched = true;
                }
                titrePosArr.push(tempObj);
            });

            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($("#random-text .text"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");
                        if(titrePosArr[j].linkMatched){
                            $(obj).addClass("linkmatched");
                        }
                        count++;
                    }
                });
            }

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            }

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });

            var currProjArr = app.currProjSet.projArr
            ,homeRandomTl = new TimelineMax({
                onComplete: function(){
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;

                    app.reorderProjects();

                    var mainView = new app.Views.MainView();
                    mainView.render();
                     
                    var homePageText = new app.Views.HomePageText();
                    homePageText.render();

                    var reviews = new app.Views.ProjetReview();
                    reviews.render();

                    app.prepareHomeCSS();
                    app.createHomeTl();
                }
            });

            homeRandomTl
            .add("fixLetters")
            .to($("#random-text .text").not(".matched"), 0.5, {opacity:0}, "fixLetters")
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){                
                    homeRandomTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top,
                          left: posArr[key].start.left
                      }
                    });
                });
            }else{
                _.each(matchedElArr, function(obj, key){                
                    homeRandomTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top - 5,
                          left: posArr[key].start.left
                      }
                    });
                });
            }

            homeRandomTl
            .add("skewLetters")
            _.each(matchedElArr, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                homeRandomTl.to(obj, 1, {transform: str}, "skewLetters");                
            });

            homeRandomTl
            .add("moveLetters")
            .to(matchedElArr, 1, {transform:"skew(0)"}, "moveLetters")
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){
                    homeRandomTl.to(obj, 1, {
                        top: posArr[key].end.top,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }else{ 
                _.each(matchedElArr, function(obj, key){
                    homeRandomTl.to(obj, 1, {
                        top: posArr[key].end.top - 5,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }
            homeRandomTl
            .add("changeColorLetters")
            .to("#ghost-text", 1, {opacity:1}, "changeColorLetters")
            .to("#random-text", 1, {opacity:0}, "changeColorLetters")
        },
        _animateProjectToHome : function(previous, next, ctx){
            app.currentParaIdx = Math.floor(Math.random() * app.initParaArr.length);
            app.currProjSet = app.getHomePara(app.areTitlesInPara(app.initParaArr[app.currentParaIdx]));
            app.ghostText = app.currProjSet.para;
            var titrePosArr = []
            ,matchedElArr = []
            ,posArr = []
            ,ghostTextView = new app.Views.GhostText()
            ,self = this
            ;
            var currProjArr = app.currProjSet.projArr
            ,projToHomeTl = new TimelineMax({
                onComplete: function(){
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;

                    app.reorderProjects();

                    var mainView = new app.Views.MainView();
                    mainView.render();
                    
                    var homePageText = new app.Views.HomePageText();
                    homePageText.render();

                    var reviews = new app.Views.ProjetReview();
                    reviews.render();

                    app.prepareHomeCSS();
                    app.createHomeTl();
                }
            });

            ghostTextView.render();

            _.each($("#ghost-text .text"), function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).position(),
                    matched : false,
                    linkMatched : false
                }
                if($(obj).find("a").length){
                    tempObj.linkMatched = true;
                }
                titrePosArr.push(tempObj);
            });

            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($("#random-text .text"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");
                        if(titrePosArr[j].linkMatched){
                            $(obj).addClass("linkmatched");
                        }
                        count++;
                    }
                });
            }

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            }

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });

            projToHomeTl
            .add("fixLetters")
            .to($("body"), 0.1, {overflowY:"hidden"}, "fixLetters")
            .to($("#random-text .text").not(".matched"), 0.5, {opacity:0}, "fixLetters")
            .to($(".matched"), 0.5, {color:"rgba(0,0,0,0.15)"}, "fixLetters")
            .to($(".linkmatched"), 0.5, {color:"rgba(0,0,0,1)"}, "fixLetters")
            .to($("a.projectTrigger"), 0.5, {bottom:0}, "fixLetters")
            .to($(".project-container"), 0.5, {opacity:0}, "fixLetters")
            .to($(".main"), 0.5, {backgroundColor:"rgba(255,255,255,0.7)"}, "fixLetters")
            ;
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){                
                    projToHomeTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top,
                          left: posArr[key].start.left
                      }
                    });
                });
            }else {
                _.each(matchedElArr, function(obj, key){                
                    projToHomeTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top - 5,
                          left: posArr[key].start.left
                      }
                    });
                });
            }
            
            projToHomeTl
            .add("skewLetters")
            .to(["header", "#projetsReview", ".profile"], 0.5, {color:"#000", borderBottomColor:"#fff"}, "skewLetters")
            .fromTo(".header img", 0.5, {filter:"invert(100%)"},{filter:"invert(0%)"}, "skewLetters")
            .to(["nav .menu-line", "nav .burger li"], 0.5, {backgroundColor:"#000"}, "skewLetters")
            .to("#social-icons", 0.5, {borderTopColor:"#000"}, "skewLetters")
            .to("#nav .social", 0.5, {borderColor:"#333"}, "skewLetters")
            .to("#projetsReview div.projetsDetails svg", 0.2, {attr:{stroke:"#00"}}, "skewLetters")
            .to("#nav .social i", 0.5, {color:"#333"}, "skewLetters")
            .to("#projetsReview div.projetsDetails", 0.2, {opacity:0, height:0}, "skewLetters")
            ;
            _.each(matchedElArr, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                projToHomeTl.to(obj, 1, {transform: str}, "skewLetters");                
            });

            projToHomeTl
            .add("moveLetters")
            .to(matchedElArr, 1, {transform:"skew(0)"}, "moveLetters")
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){
                    projToHomeTl.to(obj, 1, {
                        top: posArr[key].end.top,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }else{
                _.each(matchedElArr, function(obj, key){
                    projToHomeTl.to(obj, 1, {
                        top: posArr[key].end.top - 5,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }

            projToHomeTl
            .add("changeColorLetters")
            .to("#ghost-text", 1, {opacity:1}, "changeColorLetters")
            .to("#random-text", 1, {opacity:0}, "changeColorLetters")
            ;    

            app.projToHomeTl = projToHomeTl; 
        },
        _animatehomeToProj : function(previous, next, ctx){
            app.ghostText = app.insertTitle(app.currentProject.titre);
            app.homeTimeline.pause();

            var titrePosArr = []
            ,matchedElArr = []
            ,posArr = []
            ,ghostTextView = new app.Views.GhostText()
            ,count
            ,self = this
            ;
            ghostTextView.render();

            var currProjArr = app.currProjSet.projArr
            ,homeToProjTl = new TimelineMax({
                onComplete: function(){
                    app.homeTimeline.seek(0).kill()

                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;

                    var mainView = new app.Views.MainView();
                    mainView.render();
                    
                    var projPageText = new app.Views.ProjectPageText();
                    projPageText.render();

                    var reviews = new app.Views.ProjetReview();
                    reviews.render();

                    app.prepareProjCSS();
                    app.createProjectTl();
                }
            });

            _.each($("#ghost-text .text"), function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).position(),
                    matched : false
                }
                titrePosArr.push(tempObj);
            });
            
            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($("#random-text .text"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");
                        count++;
                    }
                });
            }

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            }

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });

            console.log(matchedElArr[0])

            homeToProjTl
            .add("fixLetters")
            .to($("#random-text .text").not(".matched"), 0.5, {opacity:0}, "fixLetters")
            ;        

            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){                
                    homeToProjTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top,
                          left: posArr[key].start.left
                      }
                    });
                });
            }else{
                _.each(matchedElArr, function(obj, key){                
                    homeToProjTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top - 5,
                          left: posArr[key].start.left
                      }
                    });
                });
            }

            homeToProjTl
            .add("skewLetters")
            _.each(matchedElArr, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                homeToProjTl.to(obj, 1, {transform: str}, "skewLetters");                
            });

            homeToProjTl
            .add("moveLetters")
            .to(matchedElArr, 1, {transform:"skew(0)"}, "moveLetters")
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){
                    homeToProjTl.to(obj, 1, {
                        top: key>0?posArr[key].end.top:posArr[key].end.top+20,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }else{ 
                _.each(matchedElArr, function(obj, key){
                    homeToProjTl.to(obj, 1, {
                        top: key>0?posArr[key].end.top - 5:posArr[key].end.top + 15,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }
            homeToProjTl
            .add("changeColorLetters")
            .to("#ghost-text", 1, {opacity:1}, "changeColorLetters")
            .to("#random-text", 1, {opacity:0}, "changeColorLetters")
            .to("#ghost-text .text", 1, {color:"#fff"}, "changeColorLetters")
            .to(".main", 1, {backgroundColor:"rgba(0,0,0,0.5)"}, "changeColorLetters")
            .to("#projetsReview div.projetsDetails", 0.2, {opacity:0, height:0}, "changeColorLetters")
            .to(["header", "#projetsReview", ".profile"], 1, {color:"#fff", borderBottomColor:"#fff"}, "changeColorLetters")
            .fromTo(".header img", 1, {filter:"invert(0%)"},{filter:"invert(100%)"}, "changeColorLetters")
            .to(["nav .menu-line", "nav .burger li"], 1, {backgroundColor:"#fff"}, "changeColorLetters")
            .to("#social-icons", 1, {borderTopColor:"#fff"}, "changeColorLetters")
            .to("#nav .social", 1, {borderColor:"#ccc"}, "changeColorLetters")
            .to("#nav .social i", 1, {color:"#ccc"}, "changeColorLetters")
            ;

            _.each(matchedElArr, function(obj, key){
                homeToProjTl.to([obj, $(obj).find("a")], 1, {color:"#fff"}, "changeColorLetters");
            });

            app.homeToProjTl = homeToProjTl;
        },
        _getPosition: function(context, titreArr){
            var currentLetter = $(context).text(), tempArr = [];
            for(j = 0; j < titreArr.length; j++){
                if(titreArr[j].value == currentLetter && !titreArr[j].matched){
                    tempObj = {
                        value : titreArr[j].value,
                        position : titreArr[j].position,
                        matched : true
                    }
                    titreArr[j].matched = true;
                    break;
                }
            }
            return {
                top : tempObj.position.top,
                left: tempObj.position.left
            }
        },
        _animateHomeToMenu : function(previous, next, ctx){
            $("a.projectTrigger").parent().addClass("matched");
            var homeToMenuTl = new TimelineMax({
                onComplete: function(){
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;                                    
                    
                    app.reorderProjects();
                    app.prepareMenuCSS();                
                    app.createMenuTl();
                }
            })
            ,matched = $("a.projectTrigger").parent()
            ,unmatched = $("#random-text .text").not(matched)
            ,posArr = []
            ;

            $(".projListCon .text").show();

            _.each(matched, function(obj, key){
                var initPos = $(obj).position();
                var lettersToChoose;
                if(app.isMobile()){
                    lettersToChoose = $(".main .projListCon .text");
                }else{
                    lettersToChoose = $(".css-threed .projListCon .text");
                }
                var finPos = $(lettersToChoose[key]).offset();
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });

            homeToMenuTl
            .to(unmatched, 1, {opacity:0}, "hideLetters")
            .to($(".burger li")[0], 0.3, {x:-4, y:-4}, "hideLetters")
            .to($(".burger li")[1], 0.3, {y:-4}, "hideLetters")
            .to($(".burger li")[2], 0.3, {x:4, y:-4}, "hideLetters")
            .to($(".burger li")[3], 0.3, {x:-4, y:4}, "hideLetters")
            .to($(".burger li")[4], 0.3, {y:4}, "hideLetters")
            .to($(".burger li")[5], 0.3, {x:4, y:4}, "hideLetters")            
            .to($(".burger li"), 0.3, {delay:0.2, opacity:0}, "hideLetters")                            
            
            if(app.isMobile()){
                homeToMenuTl
                .to($(".burger #menu-line1"), 0.5, {top:4, left:8, y:4, width:25, rotationZ:0}, "hideLetters")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "hideLetters")
                .to($(".burger #menu-line3"), 0.5, {top:20, left:8, y:6, width:25, rotationZ:0}, "hideLetters")
            }else{
                homeToMenuTl
                .to($(".burger #menu-line1"), 0.5, {top:6, left:8, y:4, width:25, rotationZ:0}, "hideLetters")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "hideLetters")
                .to($(".burger #menu-line3"), 0.5, {top:18, left:8, y:6, width:25, rotationZ:0}, "hideLetters")
            }

            homeToMenuTl
            .to("a.projectTrigger", 1, {color:"rgba(0,0,0,0.15)"}, "hideLetters")
            .to(".main", 1, {backgroundColor:"rgba(0,0,0,0)"}, "hideLetters")
            .to(".home-container", 1, {opacity:0}, "hideLetters")
            .to("#projetsReview", 1, {opacity:0}, "hideLetters")
            ;
            _.each(matched, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                homeToMenuTl.to(obj, 1, {transform: str}, "hideLetters");                
            });

            _.each(matched, function(obj, key){                
                homeToMenuTl.set(obj, {
                  css : {
                      position: "absolute",
                      top: posArr[key].start.top,
                      left: posArr[key].start.left
                  }
                });
            });

            if(app.isMobile()){
                homeToMenuTl
                .add("moveLetters")
                .to(matched, 1, {transform:"skew(0)"}, "moveLetters")
                _.each(matched, function(obj, key){
                    homeToMenuTl.to(obj, 1, {
                        top: posArr[key].end.top - 100,
                        left: posArr[key].end.left - 25
                    }, "moveLetters");
                });
            }else{
                homeToMenuTl
                .add("moveLetters")
                .to(matched, 1, {transform:"skew(0)"}, "moveLetters")            
                _.each(matched, function(obj, key){
                    homeToMenuTl.to(obj, 1, {
                        top: posArr[key].end.top - 155,
                        left: posArr[key].end.left - 55
                    }, "moveLetters");
                });
            }

            app.homeToMenuTl = homeToMenuTl;
        },
        _animateMenuToHome : function(previous, next, ctx){
            var currProjArr = app.currProjSet.projArr
            ,menuToHomeTl = new TimelineMax({
                onComplete: function(){
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;                    

                    var mainView = new app.Views.MainView();
                    mainView.render();
    
                    var homePageText = new app.Views.HomePageText();
                    homePageText.render();

                    var reviews = new app.Views.ProjetReview();
                    reviews.render();
                    
                    app.reorderProjects();
                    app._resetMenu();
                    app.prepareHomeCSS();
                    app.createHomeTl();
                }
            }),
            bboxArr = []
            ;
            
            app.currentParaIdx = Math.floor(Math.random() * app.initParaArr.length);
            app.currProjSet = app.getHomePara(app.areTitlesInPara(app.initParaArr[app.currentParaIdx]));
            app.ghostText = app.currProjSet.para;
            var titrePosArr = []
            ,matchedElArr = []
            ,ghostTextView = new app.Views.GhostText()
            ,self = this
            ;

            ghostTextView.render();            

            _.each($("#ghost-text a.projectTrigger").parent(), function(obj){
                var bboxPos = {
                    value : $(obj).text(),
                    left  : $(obj)[0].getBoundingClientRect().left + $(window)['scrollLeft'](),
                    top  : $(obj)[0].getBoundingClientRect().top + $(window)['scrollTop']()                 
                }
                bboxArr.push(bboxPos);
            });

            $(".main .ghost").remove();
            var lettersToChoose;
            if(app.isMobile()){
                lettersToChoose = $(".main .projListCon .text");
            }else{
                lettersToChoose = $(".css-threed .projListCon .text");
            }
            _.each(lettersToChoose, function(obj, key){
                var el = $(obj).clone();
                el.addClass("ghost")
                el.css({
                    position: "absolute",
                    top: $(obj).offset().top,
                    left: $(obj).offset().left
                })
                $(".main").append(el)
            });

            var matchedEl = $(".main .ghost");
            for(j = 0; j < bboxArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(bboxArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push({
                                el: matchedEl[i],
                                start: {
                                    top: $(matchedEl[i]).offset().top,
                                    left: $(matchedEl[i]).offset().left
                                },
                                end: {
                                    top: bboxArr[j].top,
                                    left: bboxArr[j].left
                                }
                            });
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            };

            matchedEl = $(".main .ghost");
            menuToHomeTl
            .add("hideMenuComp")            
            .to(".burger li", 1, {opacity:1, x:0, y:0}, "hideMenuComp")
            .to(".burger #menu-line1", 0.5, {top:17, left:0, y:1, width:25, rotationZ:90}, "hideMenuComp")
            .to(".burger #menu-line2", 0.5, {width:45, left:-2, top:17}, "hideMenuComp")
            .to(".burger #menu-line3", 0.5, {top:18, left:16, y:0, width:25, rotationZ:90}, "hideMenuComp")
            .to([".menu-container", ".projListCon"], 1, {opacity:0}, "hideMenuComp")
            
            .to(matchedEl, 1, {color:"rgba(0,0,0,1)"}, "hideMenuComp")

            _.each(matchedEl, function(obj, key){
                var str = "";
                if(matchedElArr[key].start.top > matchedElArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(matchedElArr[key].start.left > matchedElArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                menuToHomeTl.to(obj, 1, {transform: str}, "hideMenuComp");                
            });

            menuToHomeTl
            .add("moveLetters")
            .to(matchedEl, 1, {transform:"skew(0)"}, "moveLetters")
            _.each(matchedElArr, function(obj, key){
                menuToHomeTl.to(matchedElArr[key].el, 1, {
                    top: matchedElArr[key].end.top,
                    left: matchedElArr[key].end.left
                }, "moveLetters");
            });

            menuToHomeTl
            .add("showHome")
            .to("#ghost-text", 1, {opacity:1}, "showHome")
            .to(matchedEl, 1, {opacity:0}, "showHome")
        },
        _animateNextProject: function(previous, next, ctx){
            app.ghostText = app.insertTitle(app.currentProject.titre);
            var titrePosArr = []
            ,matchedElArr = []
            ,posArr = []
            ,ghostTextView = new app.Views.GhostText()
            ,count
            ,self = this
            ,nextProjectTl = new TimelineMax({
                onComplete: function(){
                    app.stopWebGLAnimation('projToProj');

                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next;
                    
                    var mainView = new app.Views.MainView();
                    mainView.render();

                    if(app.isMobile()){
                        var menuPageText = new app.Views.MenuPageText();
                        menuPageText.render(); 
                    }
                        
                    var projPageText = new app.Views.ProjectPageText();
                    projPageText.render();
                    
                    var reviews = new app.Views.ProjetReview();
                    reviews.render();
                    
                    app.prepareProjCSS();
                    app.createProjectTl();                
                }
            })
            ;
            ghostTextView.render();

            _.each($("#ghost-text .text"), function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).position(),
                    matched : false
                }
                titrePosArr.push(tempObj);
            });

            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($("#random-text .text"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");
                        count++;
                    }
                });
            }

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            }

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });
            
            var currentPlane = app.prevProject.projPr;
            var nextplane = app.currentProject.projPr;

            nextProjectTl
            .add("scrollUp")
            .to(window, 0.7, {scrollTo:{y:0}}, "scrollUp")
            .to( $("svg#top-svg") , 0.5, {     
                strokeDashoffset: "55",
                ease:Power2.easeOut
            }, "scrollUp") 
            .to( $("svg#bottom-svg") , 0.5, {     
                strokeDashoffset: "-55",
                ease:Power2.easeOut
            }, "scrollUp")
            .to( $(".arrow-down-rect") , 0.5, {     
                strokeDashoffset: "100",
                ease:Power2.easeOut
            }, "scrollUp")
            .add("fixLetters")
            .to("#projetsReview div.projetsDetails", 0.2, {opacity:0, height:0}, "fixLetters")
            .to(".proj-title", 0.5, {opacity:0}, "fixLetters")
            .to($("#random-text .text").not(".matched"), 1, {opacity:0}, "fixLetters")                    

            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){                
                    nextProjectTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top,
                          left: posArr[key].start.left
                      }
                    });
                });
            }else{
                _.each(matchedElArr, function(obj, key){                
                    nextProjectTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top - 5,
                          left: posArr[key].start.left
                      }
                    });
                });
            }

            _.each(matchedElArr, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                nextProjectTl.to(obj, 1, {transform: str}, "fixLetters");                
            });
            
            nextProjectTl
            .add("moveLetters")
            .to(matchedElArr, 1, {transform:"skew(0)"}, "moveLetters")
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){
                    nextProjectTl.to(obj, 1, {
                        top: posArr[key].end.top,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }else{
                _.each(matchedElArr, function(obj, key){
                    nextProjectTl.to(obj, 1, {
                        top: posArr[key].end.top - 5,
                        left: posArr[key].end.left
                    }, "moveLetters");
                });
            }

            nextProjectTl
            .add("changeColorLetters")
            .to("#ghost-text", 1, {opacity:1}, "changeColorLetters")
            .to("#ghost-text .text", 1, {color:"rgba(255,255,255,1)"}, "changeColorLetters")
            .to("#random-text", 1, {opacity:0}, "changeColorLetters")
            .to(currentPlane.material, 1, {
                opacity:0, 
                onStart: function(){
                    app.startWebGLAnimation('projToProj');
                }
            }, "changeColorLetters")
            .to(nextplane.material, 1, {opacity:1}, "changeColorLetters")
            ;
        },
        _animateMenuToProject : function(previous, next, ctx){
            
            var titrePosArr = []
            ,matchedElArr = []
            ,self = this
            ;

            app.ghostText = app.insertTitle(app.currentProject.titre);
            var currProjArr = app.currProjSet.projArr
            ,menuToProjTl = new TimelineMax({
                onComplete: function(){
                    app.stopWebGLAnimation('menuToProj');                    
                    
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next; 
                    var mainView = new app.Views.MainView();
                    mainView.render();
                    
                    var projPageText = new app.Views.ProjectPageText();
                    projPageText.render();
                    
                    var reviews = new app.Views.ProjetReview();
                    reviews.render();
                    
                    app.prepareProjCSS();
                    if(app.isMobile()){
                        var menuPageText = new app.Views.MenuPageText();
                        menuPageText.render();
                        $(".project-container").css("opacity", 0);            
                    }else if(app.isTablet()){
                        $(".menu-css-container, .menu-container canvas").css("top", 250);                                
                    }
                    app.createProjectTl();
                }
            }),
            posArr = []
            ;

            var ghostTextView = new app.Views.GhostText()
            ghostTextView.render();         
            
            $(".main .ghost").remove();

            var lettersToChoose;
            if(app.isMobile()){
                lettersToChoose = $(".main .projListCon .text");
            }else{
                lettersToChoose = $(".css-threed .projListCon .text");
            }
            $(".projListCon .text").show();
            console.log(lettersToChoose)
            _.each(lettersToChoose, function(obj, key){
                var el = $(obj).clone();
                el.addClass("ghost")
                el.css({
                    position: "absolute",
                    top: $(obj).offset().top,
                    left: $(obj).offset().left
                })
                $(".main").append(el)
            });
            $(".projListCon .text").hide();

            _.each($("#ghost-text .text"), function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).offset(),
                    matched : false
                }
                titrePosArr.push(tempObj);
            });

            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($(".main .ghost"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");
                        count++;
                    }
                });
            };

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            };

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });

            menuToProjTl
            .add("hideMenuComp")
            
            menuToProjTl
            .to(".main .ghost", 0.5, {color:"rgba(0,0,0,0.15)"}, "hideMenuComp")
            .to(".burger li", 0.5, {opacity:1, x:0, y:0}, "hideMenuComp")
            .to(".burger #menu-line1", 0.5, {top:17, left:0, y:1, width:25, rotationZ:90}, "hideMenuComp")
            .to(".burger #menu-line2", 0.5, {width:45, left:-2, top:17}, "hideMenuComp")
            .to(".burger #menu-line3", 0.5, {top:18, left:16, y:0, width:25, rotationZ:90}, "hideMenuComp")                    
          
            var idx = currProjArr.indexOf(app.currentProject);
            var refPlane = app.currentProject.bigRefPlane;
            var time = 0.5;
            app.startWebGLAnimation('menuToProj');

            if(app.isMobile()){

            }else{
                var matArr = [], cssPrArr = [];
                var planeToAnim = app.currentProject.menuPr.pl;
                _.each(currProjArr, function(obj, key){
                    if(idx != key){
                        matArr.push(obj.menuPr.pl.material);
                    }
                    cssPrArr.push(obj.menuPr.cssPr.element);


                    menuToProjTl
                    .staggerTo(matArr, 1, {opacity:0}, 0, "hideMenuComp")
                    .staggerTo(cssPrArr, 1, {opacity:0}, 0, "hideMenuComp")
                })
            }

            if(app.isMobile()){
                menuToProjTl
                .to(".projListCon", 1, {opacity:0}, "hideMenuComp")
            }else{
                menuToProjTl
                .to(planeToAnim.material, 1, {opacity:0.3}, "hideMenuComp")
            }
            
            menuToProjTl
            .to($(".main .ghost").not(".matched"), 1, {opacity:0}, "hideMenuComp")
            ;

            _.each(matchedElArr, function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                menuToProjTl.to(obj, 1, {transform: str}, "hideMenuComp");                
            });

            if(!app.isMobile()){                
                menuToProjTl
                .add("focusProj")
                .to($(".menu-css-container, .menu-container canvas"), time, {top:0}, "focusProj+=0.3")
                .to(window, time, {scrollTo:{y:0}}, "focusProj+=0.3")                
                .to(planeToAnim.geometry.vertices[0], time, {
                    ease:Power2.easeInOut,
                    x:refPlane.geometry.vertices[0].x - planeToAnim.position.x,
                    y:refPlane.geometry.vertices[0].y - planeToAnim.position.y,
                    onUpdate:function(){
                        planeToAnim.geometry.verticesNeedUpdate = true;
                    } 
                }, "focusProj")            
                .to(planeToAnim.geometry.vertices[1], time, {
                    ease:Power2.easeInOut,
                    x:refPlane.geometry.vertices[1].x - planeToAnim.position.x,
                    y:refPlane.geometry.vertices[1].y - planeToAnim.position.y,
                    onUpdate:function(){
                        planeToAnim.geometry.verticesNeedUpdate = true;
                    }
                }, "focusProj+=0.1")        
                .to(planeToAnim.geometry.vertices[2], time, {
                    ease:Power2.easeInOut,
                    x:refPlane.geometry.vertices[2].x - planeToAnim.position.x,
                    y:refPlane.geometry.vertices[2].y - planeToAnim.position.y,
                    onUpdate:function(){
                        planeToAnim.geometry.verticesNeedUpdate = true;
                    }
                }, "focusProj+=0.2")
                .to(planeToAnim.geometry.vertices[3], time, {
                    ease:Power2.easeInOut,
                    x:refPlane.geometry.vertices[3].x - planeToAnim.position.x,
                    y:refPlane.geometry.vertices[3].y - planeToAnim.position.y,
                    onUpdate:function(){
                        planeToAnim.geometry.verticesNeedUpdate = true;
                    },
                    onComplete:function(){
                        app.stopWebGLAnimation('menuToProj');                    
                    }
                }, "focusProj+=0.3")
            }

            menuToProjTl
            .add("moveLetters")
            .to(matchedElArr, 1, {transform:"skew(0)",
                onComplete:function(){
                    app.startWebGLAnimation('menuToProj');                    
                }
            }, "moveLetters")
            ;
            _.each(matchedElArr, function(obj, key){
                menuToProjTl.to(obj, 1, {
                    top: posArr[key].end.top,
                    left: posArr[key].end.left
                }, "moveLetters");
            });

            if(app.isMobile()){
                menuToProjTl
                .to(window, 1, {scrollTo:{y:0}}, "moveLetters")                
            }

            menuToProjTl
            .add("changeColorLetters")
            .to("#ghost-text", 0.5, {opacity:1}, "changeColorLetters")
            .to($(".main .ghost"), 0.5, {opacity:0}, "changeColorLetters")
            .add("changeColorLetters2")
            .to("#ghost-text .text", 1, {color:"#fff"}, "changeColorLetters2")
            .to(".main", 1, {backgroundColor:"rgba(0,0,0,0.5)"}, "changeColorLetters2")
            .to(["header", "#projetsReview", ".profile"], 1, {color:"#fff", borderBottomColor:"#fff"}, "changeColorLetters2")
            .fromTo(".header img", 1, {filter:"invert(0%)"},{filter:"invert(100%)"}, "changeColorLetters2")
            .to([".header-el .menu-line", ".header-el .burger li"], 1, {backgroundColor:"#fff"}, "changeColorLetters2")
            .to("#social-icons", 1, {borderTopColor:"#fff"}, "changeColorLetters2")
            .to("#nav .social", 1, {borderColor:"#ccc"}, "changeColorLetters2")
            .to("#nav .social i", 1, {color:"#ccc"}, "changeColorLetters2")                   
            
            if(!app.isMobile()){
                menuToProjTl
                .to(planeToAnim.material, 0.5, {opacity:1}, "changeColorLetters2")
            }

            app.menuToProjTl = menuToProjTl;
        },
        _animateProjectToMenu : function(previous, next, ctx){
             var titrePosArr = []
            ,matchedElArr = []
            ,self = this
            ;
           
            var currProjArr = app.currProjSet.projArr
            ,projToMenuTl = new TimelineMax({
                onComplete: function(){
                    app.stopWebGLAnimation('projToMenu');                
                    
                    previous.remove();
                    next.render({ page: true });
                    ctx.$el.append( next.$el );
                    ctx.currentPage = next; 
                    app.prepareMenuCSS();
                    
                    if(app.isMobile()){                                           
                        $(".project-container").css("opacity", 0);
                        var mainView = new app.Views.MainView();
                        mainView.render();

                        var menuPageText = new app.Views.MenuPageText();
                        menuPageText.render(); 

                    }else{
                        $(".project-container").css("opacity", 1);
                    }
                    
                    app.createMenuTl(); 
                }
            }),
            posArr = []
            ;        
            if(app.isMobile()){
                lettersToChoose = $(".main .projListCon .text");
            }else{
                lettersToChoose = $(".css-threed .projListCon .text");
            }
            $(".projListCon .text").show();
            console.log(lettersToChoose)
            _.each(lettersToChoose, function(obj){
                tempObj = {
                    value : $(obj).text(),
                    position : $(obj).offset(),
                    matched : false
                }
                titrePosArr.push(tempObj);
            });
          
            for(j = 0;j < titrePosArr.length;j++){
                count = 0;
                _.each($("#random-text .text"), function(obj, key){
                    if(count == 0 && !$(obj).hasClass("matched") && titrePosArr[j].value == $(obj).text()){
                        $(obj).addClass("matched");                        
                        count++;
                    }
                });
            }

            var matchedEl = $(".matched").toArray();
            for(j = 0; j < titrePosArr.length; j++){
                for(i = 0; i < matchedEl.length; i++){
                    if(matchedEl[i]!=null){
                        if(titrePosArr[j].value == $(matchedEl[i]).text()){
                            matchedElArr.push(matchedEl[i]);  
                            matchedEl[i] = null;
                            break;
                        }
                    }
                }
            }

            _.each(matchedElArr, function(obj){
                var initPos = $(obj).position();
                var finPos = self._getPosition($(obj), titrePosArr);
                posArr.push({
                    start : initPos,
                      end : finPos
                });
            });
            

            projToMenuTl
            .add("hideProjectComp")
            .to($(".matched"), 0.3, {color:"rgba(0,0,0,0.15)"}, "hideProjectComp")
            .to($("#random-text .text").not(".matched"), 0.3, {opacity:0}, "hideProjectComp")            
            .to(".main", 0.5, {backgroundColor:"rgba(0,0,0,0)"}, "hideProjectComp")
            


            if(app.isMobile()){
                projToMenuTl
                .to(".project-container", 1, {opacity:0}, "hideProjectComp")
                ;
            }else{
                var planeToAnim = app.currentProject.projPr;
                var smallRefPlane = app.currentProject.smallRefPlane;
                var time = 0.5;

                app.planeToAnim = planeToAnim;
                projToMenuTl
                .to(planeToAnim.material, 0.5, {opacity:0.2,
                    onStart:function(){
                        app.startWebGLAnimation('projToMenu');  
                    },
                    onComplete:function(){
                       app.stopWebGLAnimation('projToMenu');                
                    }
                }, "hideProjectComp")
            }

            projToMenuTl
            .to([".arrow-down", ".back-container"], 0.3, {opacity:0}, "hideProjectComp")
            .to($(".burger li")[0], 0.3, {x:-4, y:-4}, "hideProjectComp")
            .to($(".burger li")[1], 0.3, {y:-4}, "hideProjectComp")
            .to($(".burger li")[2], 0.3, {x:4, y:-4}, "hideProjectComp")
            .to($(".burger li")[3], 0.3, {x:-4, y:4}, "hideProjectComp")
            .to($(".burger li")[4], 0.3, {y:4}, "hideProjectComp")
            .to($(".burger li")[5], 0.3, {x:4, y:4}, "hideProjectComp")            
            .to($(".burger li"), 0.3, {delay:0.2, opacity:0}, "hideProjectComp")                            

            if(app.isMobile()){
                projToMenuTl
                .to($(".burger #menu-line1"), 0.5, {top:4, left:8, y:4, width:25, rotationZ:0}, "hideProjectComp")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "hideProjectComp")
                .to($(".burger #menu-line3"), 0.5, {top:20, left:8, y:6, width:25, rotationZ:0}, "hideProjectComp")
            }else{
                projToMenuTl
                .to($(".burger #menu-line1"), 0.5, {top:6, left:8, y:4, width:25, rotationZ:0}, "hideProjectComp")
                .to($(".burger #menu-line2"), 0.5, {width:25, left:8}, "hideProjectComp")
                .to($(".burger #menu-line3"), 0.5, {top:18, left:8, y:6, width:25, rotationZ:0}, "hideProjectComp")
            }

            projToMenuTl
            .to($("#projetsReview"), 0.3, {opacity:0}, "hideProjectComp")
            .to("#projetsReview div.projetsDetails", 0.2, {opacity:0, height:0}, "hideProjectComp")
            .to(["header", "#projetsReview", ".profile"], 0.3, {color:"#000", borderBottomColor:"#000"}, "hideProjectComp")
            .fromTo(".header img", 0.3, {filter:"invert(100%)"},{filter:"invert(0%)"}, "hideProjectComp")
            .to([".header-el .menu-line", ".header-el .burger li"], 0.3, {backgroundColor:"#000"}, "hideProjectComp")
            .to("#social-icons", 0.3, {borderTopColor:"#000"}, "hideProjectComp")
            .to("#nav .social", 0.3, {borderColor:"#333"}, "hideProjectComp")
            .to("#nav .social i", 0.3, {color:"#333"}, "hideProjectComp")
            ;
            
            if(app.isMobile() || app.isTablet()){
                _.each(matchedElArr, function(obj, key){                
                    projToMenuTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top,
                          left: posArr[key].start.left
                      }
                    });
                });
            }else {
                _.each(matchedElArr, function(obj, key){                
                    projToMenuTl.set(obj, {
                      css : {
                          position: "absolute",
                          top: posArr[key].start.top - 5,
                          left: posArr[key].start.left
                      }
                    });
                });
            }
            
            projToMenuTl
            .add("hideProjectComp2")
            _.each($(".matched"), function(obj, key){
                var str = "";
                if(posArr[key].start.top > posArr[key].end.top){
                    str+= "skewY(-5deg) ";
                }else{
                    str+= "skewY(5deg) ";
                }
                if(posArr[key].start.left > posArr[key].end.left){
                    str+= "skewX(-5deg) ";
                }else{
                    str+= "skewX(5deg) ";
                }
                projToMenuTl.to(obj, 0.5, {transform: str}, "hideProjectComp2");                
            });

            if(!app.isMobile()){
                projToMenuTl
                .add("focusProj")
                .to(planeToAnim.geometry.vertices[0], time, {
                    ease:Power2.easeInOut,
                    x:smallRefPlane.geometry.vertices[0].x + smallRefPlane.position.x,
                    y:smallRefPlane.geometry.vertices[0].y + smallRefPlane.position.y,
                    onUpdate:function(){
                        //planeToAnim.geometry.verticesNeedUpdate = true;
                    },
                    onStart:function(){
                        app.startWebGLAnimation('projToMenu');                
                    } 
                }, "focusProj")            
                .to(planeToAnim.geometry.vertices[1], time, {
                    ease:Power2.easeInOut,
                    x:smallRefPlane.geometry.vertices[1].x + smallRefPlane.position.x,
                    y:smallRefPlane.geometry.vertices[1].y + smallRefPlane.position.y,
                    onUpdate:function(){
                        //planeToAnim.geometry.verticesNeedUpdate = true;
                    }
                }, "focusProj+=0.1")        
                .to(planeToAnim.geometry.vertices[2], time, {
                    ease:Power2.easeInOut,
                    x:smallRefPlane.geometry.vertices[2].x + smallRefPlane.position.x,
                    y:smallRefPlane.geometry.vertices[2].y + smallRefPlane.position.y,
                    onUpdate:function(){
                        //planeToAnim.geometry.verticesNeedUpdate = true;
                    }
                }, "focusProj+=0.2")
                .to(planeToAnim.geometry.vertices[3], time, {
                    ease:Power2.easeInOut,
                    x:smallRefPlane.geometry.vertices[3].x + smallRefPlane.position.x,
                    y:smallRefPlane.geometry.vertices[3].y + smallRefPlane.position.y,
                    onUpdate:function(){
                        //planeToAnim.geometry.verticesNeedUpdate = true;
                    },
                    onComplete:function(){
                        app.stopWebGLAnimation('projToMenu');                
                    }
                }, "focusProj+=0.3")
            }
            
            if(app.isTablet()){
                projToMenuTl                    
                .to($(".project-container canvas"), time, {top:250}, "focusProj")
            }

            projToMenuTl
            .to($(".matched"), 1, {transform:"skew(0)"}, "moveLetters")                        
            
            if(app.isMobile()){
                _.each(matchedElArr, function(obj, key){
                    projToMenuTl.to(obj, 1, {
                        top: posArr[key].end.top - 135,
                        left: posArr[key].end.left - 20
                    }, "moveLetters");
                });
            }else if(app.isTablet()){
                _.each(matchedElArr, function(obj, key){
                    projToMenuTl.to(obj, 1, {
                        top: posArr[key].end.top - 165,
                        left: posArr[key].end.left - 55
                    }, "moveLetters");
                });
            }else{
                _.each(matchedElArr, function(obj, key){
                    projToMenuTl.to(obj, 1, {
                        top: posArr[key].end.top - 175,
                        left: posArr[key].end.left - 55
                    }, "moveLetters");
                });
            }

            app.projToMenuTl = projToMenuTl;
        }
    });

    app.Views.HeaderView = app.Extensions.View.extend({
        el: '.header-el',
        events: {
            'mouseenter .home-link': '_rotateLogo',
            'mouseleave .home-link': '_normalLogo',
            'click .home-link': '_navigateToHome',
            'mouseenter .burger': '_animBurger',
            'mouseleave .burger': '_normBurger',
            'click .burger': '_navigateToMenuOrHome',         
            'mouseenter #nav .social': '_glowIcons',
            'mouseleave #nav .social': '_normIcons',
        },
        _rotateLogo : function(e){
            TweenMax.to($(e.currentTarget).find("img")[1], .7, {rotationZ:"+=25", ease:Power4.easeOut})            
        },
        _normalLogo : function(e){
            TweenMax.to($(e.currentTarget).find("img")[1], .7, {rotationZ:"-=25", ease:Power4.easeOut})            
        },
        _navigateToMenuOrHome : function(e){
            if(app.currentRoute != "menu"){
                this._navigateToMenu();
            }else{
                this._navigateToHome();
            }    
        },
        _navigateToHome : function(e){
            if(app.isAnimating()){
                return;
            }else{
                if(app.isMobile()){                    
                }else{
                    if(app.currentRoute == "home"){
                        Backbone.history.loadUrl(Backbone.history.fragment);
                    }else{
                        Backbone.history.navigate("", {trigger:true})
                    }
                }
            }
        },
        _glowIcons : function(e){
            if(app.isAnimating()){
                return;
            }else{
                if(app.currentRoute != "projet"){
                    TweenMax.to(e.currentTarget, 0.1, {border: "1px solid #666"});
                    TweenMax.to($(e.currentTarget).find("i"), 0.1, {color: "#666"});
                }else{
                    TweenMax.to(e.currentTarget, 0.1, {border: "1px solid #FFF"});
                    TweenMax.to($(e.currentTarget).find("i"), 0.1, {color: "#FFF"});
                }
            }
        },
        _normIcons : function(e){
            if(app.isAnimating()){
                return;
            }else{
                if(app.currentRoute != "projet"){
                    TweenMax.to(e.currentTarget, 0.1, {border: "1px solid #333"});
                    TweenMax.to($(e.currentTarget).find("i"), 0.1, {color: "#333"});
                }else{
                    TweenMax.to(e.currentTarget, 0.1, {border: "1px solid #CCC"});
                    TweenMax.to($(e.currentTarget).find("i"), 0.1, {color: "#CCC"});
                }
            }
        },
        _animBurger : function(e){
            if(app.isAnimating()){
                return;
            }else{
                if(app.currentRoute != "menu"){
                    TweenMax.to($(e.currentTarget).find("li")[0], 0.2, {x:-2, y:-2})
                    TweenMax.to($(e.currentTarget).find("li")[1], 0.2, {y:-2})
                    TweenMax.to($(e.currentTarget).find("li")[2], 0.2, {x:2, y:-2})
                    TweenMax.to($(e.currentTarget).find("li")[3], 0.2, {x:-2, y:2})
                    TweenMax.to($(e.currentTarget).find("li")[4], 0.2, {y:2})
                    TweenMax.to($(e.currentTarget).find("li")[5], 0.2, {x:2, y:2})
                }else{
                    TweenMax.to($(e.currentTarget).find("#menu-line1"), 0.3, { y:2 })
                    TweenMax.to($(e.currentTarget).find("#menu-line3"), 0.3, { y:8 })
                }
            }
        },
        _normBurger : function(e){
            if(app.isAnimating()){
                return;
            }else{
                if(app.currentRoute != "menu"){
                    TweenMax.to($(e.currentTarget).find("li"), 0.3, {x:0, y:0})
                }else{
                    TweenMax.to($(e.currentTarget).find("#menu-line1"), 0.3, { y:4 })
                    TweenMax.to($(e.currentTarget).find("#menu-line3"), 0.3, { y:6 })
                }
            }
        },
        _navigateToMenu : function(e){      
            if(app.isAnimating()){
                return;
            }else{
                Backbone.history.navigate("#!/menu", {trigger: true})
            }      
        },    
        render: function () {
            var template = _.template($('script[name=header]').html());
            this.$el.html(template());
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.MainView = app.Extensions.View.extend({
        el: '.main',
        events: {
            'mouseenter .back-container': '_animBackBtn',
            'mouseleave .back-container': '_normBackBtn',
            'click .back-container': '_navigateBack',
            'mouseenter .down-btn': '_fillDownArrow',
            'mouseleave .down-btn': '_emptyDownArrow',
            'click .arrow-down': '_scrollDown'
        },
        _scrollDown: function(e){
            TweenMax.to(window, 1, {scrollTo:{y:window.innerHeight}});
        },
        _animBackBtn : function(e){
            TweenMax.to( $("svg#top-svg") , 0.5, {     
                strokeDashoffset: "40",
                ease:Power2.easeOut
            }) 
            TweenMax.to( $("svg#bottom-svg") , 0.5, {     
                strokeDashoffset: "-42",
                ease:Power2.easeOut
            })
        },
        _normBackBtn : function(e){
            TweenMax.to( $("svg#top-svg") , 0.5, {     
                strokeDashoffset: "0",
                ease:Power2.easeOut
            }) 
            TweenMax.to( $("svg#bottom-svg") , 0.5, {     
                strokeDashoffset: "0",
                ease:Power2.easeOut
            })
        },
        _fillDownArrow : function(e){
            TweenMax.to($(".arrow-down-rect"), 0.5, {fill: "rgba(209,209,209,1)"})
        },
        _emptyDownArrow : function(e){
            TweenMax.to($(".arrow-down-rect"), 0.5, {fill: "rgba(209,209,209,0)"})
        },
        _navigateBack : function(e){
            TweenMax.to( $("svg#top-svg") , 0.5, {     
                strokeDashoffset: "55",
                ease:Power2.easeOut
            }) 
            TweenMax.to( $("svg#bottom-svg") , 0.5, {     
                strokeDashoffset: "-55",
                ease:Power2.easeOut
            })
            TweenMax.to( $(".arrow-down-rect") , 0.5, {     
                strokeDashoffset: "100",
                ease:Power2.easeOut,
                onComplete: function(){
                    history.back();
                }
            })
        },
        render: function () {
            var template = _.template($('script[name=main]').html());
            this.$el.html(template());
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.Home = app.Extensions.View.extend({
        className: 'home',
        render: function () {            
            var template = _.template($('script[name=home]').html());
            this.$el.html(template({projets:app.currProjSet.projArr}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.Menu = app.Extensions.View.extend({
        className: 'menu',
        render: function () {
            var template = _.template($('script[name=menu]').html());
            this.$el.html(template());
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.Projet = app.Extensions.View.extend({
        className: 'projet',
        events:{
            'mouseenter .burger': '_animBurger',
            'mouseleave .burger': '_normBurger',
            'mouseenter .projetNav a': '_showBar',
            'mouseleave .projetNav a': '_hideBar',
            'click .projetNav a': '_scrollToSection',
            'click a.prevLink': '_animateNextProject',
            'click a.nextLink': '_animatePrevProject',
            'click .allProj': '_animateToMenu'
        },
        _scrollToSection: function(e){
            var scrollEl, scroll;
            if(app.isMobile()){
                switch(e.currentTarget.className){
                    case 'clientLink':
                        scrollEl = $("#trigger1");
                        break; 
                    case 'projetLink':
                        scrollEl = $("#trigger2");
                        break;
                    case 'resultatLink':
                        scrollEl = $("#trigger4");
                        break; 
                } 
                var op = $(scrollEl).parent().css("opacity");
                if(op == "0"){
                    TweenMax.to(window, 0.5, {scrollTo:{y:scrollEl.offset().top - 20}})
                }else{
                    TweenMax.to(window, 0.5, {scrollTo:{y:scrollEl.offset().top}})
                }
            }else{
                switch(e.currentTarget.className){
                    case 'clientLink':
                        scroll = 1;
                        break; 
                    case 'projetLink':
                        scroll = 2;
                        break;
                    case 'resultatLink':
                        scroll = 4;
                        break; 
                } 
                TweenMax.to(window, 0.5, {scrollTo:{y:scroll*window.innerHeight}})
            }

        },
        _animateToMenu: function(e){
            TweenMax.to(window, 1, {
                scrollTo:{y:0}, 
                onComplete: function(){
                    Backbone.history.navigate('#!/menu', { trigger:true });
                }
            });
        },
        _animateNextProject: function(){
            var currProjArr = app.currProjSet.projArr;
            app.currentProject.currIndex = currProjArr.indexOf(app.currentProject);

            var num = app.currentProject.currIndex;
            app.prevProject = currProjArr[num];

            if(num == 0)
                num = 7;
            else
                num = num-1;

            //navigate to this project url
            Backbone.history.navigate('#!/projets/' + currProjArr[num].url, { trigger:true })
        },
        _animatePrevProject: function(){
            var currProjArr = app.currProjSet.projArr;
            app.currentProject.currIndex = currProjArr.indexOf(app.currentProject);

            var num = app.currentProject.currIndex;
            app.prevProject = currProjArr[num];

            if(num == 7)
                num = 0;
            else
                num = num+1;

            //navigate to this project url
            Backbone.history.navigate('#!/projets/' + currProjArr[num].url, { trigger:true })
        },
        _animBurger : function(e){          
            TweenMax.to($(e.currentTarget).find("li")[0], 0.2, {x:-2, y:-2})
            TweenMax.to($(e.currentTarget).find("li")[1], 0.2, {y:-2})
            TweenMax.to($(e.currentTarget).find("li")[2], 0.2, {x:2, y:-2})
            TweenMax.to($(e.currentTarget).find("li")[3], 0.2, {x:-2, y:2})
            TweenMax.to($(e.currentTarget).find("li")[4], 0.2, {y:2})
            TweenMax.to($(e.currentTarget).find("li")[5], 0.2, {x:2, y:2})
        },
        _normBurger : function(e){
            TweenMax.to($(e.currentTarget).find("li"), 0.3, {x:0, y:0})
        },
        _showBar(e){  
            e.preventDefault();
            this._clearBars();
            TweenMax.to($(e.currentTarget).find(".child-bar"), 0.5, {width:"100%", ease:Expo.easeOut});
        },
        _hideBar(e){  
            e.preventDefault();
            TweenMax.to($(e.currentTarget).find(".child-bar"), 0.5, {width:"0%", ease:Expo.easeOut});
        },
        _clearBars(){
            TweenMax.to($(".child-bar"), 0.5, {width:"0%", ease:Expo.easeOut});
        },
        render: function () {            
            var template = _.template($('script[name=projet]').html());
            this.$el.html(template({pr:app.currentProject}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.ProjetReview = app.Extensions.View.extend({
        el: '#projetsReview',
        render: function () {
            var template = _.template($('script[name=projetsReview]').html());
            this.$el.html(template({projets:app.currProjSet.projArr}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.HomePageText = app.Extensions.View.extend({
        el: '#random-text',
        events: {
            'click a.projectTrigger': '_navigateToProj',
            'mouseenter a.projectTrigger': '_letterUp',
            'mouseleave a.projectTrigger': '_letterDown'
        },
        _navigateToProj: function(e){
            e.preventDefault();
            var idx = $("a.projectTrigger").toArray().indexOf(e.currentTarget)
            app.homeTimeline.tweenTo("exitLabel_"+idx, {
                onComplete: function(){
                    Backbone.history.navigate('#!/projets/' + app.currentProject.url, { trigger:true })            
                }
            }).duration(0);
        },
        _letterUp : function(e){
            e.preventDefault();
            if(app.isAnimating()){
                return;
            }else{
                var self = this;
                self.mouseover = true;
                app.homeTimeline.seek(0).pause();
                var idx = $("a.projectTrigger").toArray().indexOf(e.currentTarget)
                if(typeof self.letterUptl !== "undefined"){
                    delete self.letterUptl;
                }

                var remTriggers = _.reject($("a.projectTrigger"), function(obj, key){
                    return key == idx;
                });

                var remProjDetails = _.reject($("#projetsReview div.projetsDetails"), function(obj, key){
                    return key == idx;
                });

                var remPaths = _.reject($("#projetsReview path"), function(obj, key){
                    return key == idx;
                });

                var remProjInfo = _.reject($("#projetsReview .project-info"), function(obj, key){
                    return key == idx;
                });

                var remBg = _.reject($(".home-bg"), function(obj, key){
                    return key == idx;
                });
                
                var letterUptl = new TimelineMax({                        
                    onComplete: function(){
                        if(!self.mouseover){
                            console.log("mouseover")
                            TweenMax.to("a.projectTrigger", 0.3, {
                                bottom:0,
                                onComplete: function(){
                                    TweenMax.to("a.projectTrigger", {clearProps:"bottom"})
                                }
                            })
                            TweenMax.to("#projetsReview div.projetsDetails", 0.3, {
                                height:0,
                                onComplete: function(){
                                    TweenMax.to("#projetsReview div.projetsDetails", {clearProps:"height"})
                                }
                            })
                            TweenMax.to(".home-bg", 0.3, {
                                opacity:0,
                                onComplete: function(){
                                    TweenMax.to(".home-bg", {clearProps:"opacity"})
                                }
                            })
                            TweenMax.to("#projetsReview path", 0.3, {
                                strokeDashoffset:50,
                                onComplete: function(){
                                    TweenMax.to("#projetsReview path", {clearProps:"strokeDashoffset"})
                                }
                            })
                            TweenMax.to("#projetsReview .project-info", 0.3, {
                                opacity:0, left:10,
                                onComplete: function(){
                                    TweenMax.to("#projetsReview .project-info", {clearProps:["opacity","left"]})
                                }
                            })
                            setTimeout(function(){
                                if(!self.mouseover && !app.homeTimeline._active){
                                    app.homeTimeline.restart();
                                }
                            }, 1000)
                        }
                        else{
                            console.log("animate project info")
                            var projectInfoTl = new TimelineMax({
                                onReverseComplete: function(){
                                    if(!self.mouseover){                                        
                                        TweenMax.to("#projetsReview div.projetsDetails", 0.3, {
                                            height:0,
                                            onComplete: function(){
                                                TweenMax.to("#projetsReview div.projetsDetails", {clearProps:"height"})
                                            }
                                        })
                                        TweenMax.to(".home-bg", 0.3, {
                                            opacity:0,
                                            onComplete: function(){
                                                TweenMax.to(".home-bg", {clearProps:"opacity"})
                                            }
                                        })
                                        TweenMax.to("#projetsReview path", 0.3, {
                                            strokeDashoffset:50,
                                            onComplete: function(){
                                                TweenMax.to("#projetsReview path", {clearProps:"strokeDashoffset"})
                                            }
                                        })
                                        TweenMax.to("#projetsReview .project-info", 0.3, {
                                            opacity:0, left:10,
                                            onComplete: function(){
                                                TweenMax.to("#projetsReview .project-info", {clearProps:["opacity","left"]})
                                            }
                                        })
                                        delete projectInfoTl;
                                        setTimeout(function(){
                                            if(!self.mouseover && !app.homeTimeline._active){
                                                app.homeTimeline.restart();
                                            }
                                        }, 1000)
                                    }
                                }
                            });

                            projectInfoTl
                            .add("enter")
                            .to($("#projetsReview path")[idx], 0.4, {strokeDashoffset:0}, "enter")
                            .to(remPaths, 0.4, {strokeDashoffset:50, onComplete: function(){
                                    TweenMax.to(remPaths, {clearProps:"strokeDashoffset"})
                                }
                            }, "enter")
                            .to($("#projetsReview .project-info")[idx], 0.4, {opacity:1, left:0}, "enter+=0.2")
                            .to(remProjInfo, 0.4, {opacity:0, left:10}, "enter+=0.2")

                            self.projectInfoTl = projectInfoTl;
                        }
                    }
                });

                letterUptl
                .add("enter")
                .to(e.currentTarget, 0.4, { bottom:20 }, "enter")
                .to(remTriggers, 0.4, { bottom:0 , onComplete: function(){
                        TweenMax.to(remTriggers, {clearProps:"bottom"}) 
                    }
                }, "enter")
                .to($("#projetsReview div.projetsDetails")[idx], 0.4, {height:140}, "enter")
                .to(remProjDetails, 0.4, { height:0 , onComplete: function(){
                        TweenMax.to(remProjDetails, {clearProps:"height"}) 
                    }
                }, "enter")
                .to($(".home-bg")[idx], 0.4, {opacity:1}, "enter")
                .to(remBg, 0.4, {opacity:0, onComplete: function(){
                        TweenMax.to(remBg, {clearProps:"opacity"}) 
                    }
                }, "enter")

                self.letterUptl = letterUptl;

                app.currentProject = app.currProjSet.projArr[idx]; 
            }
        },
        _letterDown : function(e){
            e.preventDefault();
            if(app.isAnimating()){
                return;
            }else{
                var self = this;
                self.mouseover = false;
                TweenMax.to("a.projectTrigger", 0.3, {
                    bottom:0,
                    onComplete: function(){
                        TweenMax.to("a.projectTrigger", {clearProps:"bottom"})
                    }
                })
                if(typeof self.projectInfoTl !== "undefined")
                    self.projectInfoTl.reverse().timeScale(2);                
            }
        },       
        render: function () {
            var template = _.template($('script[name=random-text]').html());
            this.$el.html(template({prTitle:"", para:app.currProjSet.para}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.ProjectPageText = app.Extensions.View.extend({
        el: '#random-text',
        render: function () {
            var template = _.template($('script[name=random-text]').html());
            this.$el.html(template({prTitle:app.currentProject.infos1, para:app.insertTitle(app.currentProject.titre)}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.GhostText = app.Extensions.View.extend({
        el: '#ghost-text',  
        render: function () {
            var template = _.template($('script[name=random-text]').html());
            this.$el.html(template({prTitle:"", para:app.ghostText}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

    app.Views.MenuPageText = app.Extensions.View.extend({
        el: '#projetsList',    
        render: function () {
            var template = _.template($('script[name=menuProjets]').html());
            this.$el.html(template({projets:app.currProjSet.projArr}));
            return app.Extensions.View.prototype.render.apply(this, arguments);
        }
    });

}());