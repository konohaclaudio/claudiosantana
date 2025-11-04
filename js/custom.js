;
(function($, window, document, undefined) {
    'use strict';

    // Função para verificar o tamanho da tela (não utilizada ativamente no código principal, mas disponível)
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($(window).width() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };

    // Executa quando o documento está pronto
    $(document).ready(function() {

        // Executa quando a página inteira (incluindo imagens) foi carregada
        $(window).on('load', function() {
            // Esconde a animação de preloader
            $('.preloader').fadeOut();

            // Lógica para animações de entrada dos elementos
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate'); // Pega o tipo de animação do atributo data-animate

                    // O plugin 'inview' dispara este evento quando o elemento entra ou sai da tela
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            // Adiciona a animação com um pequeno atraso para efeito de cascata
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            // Reseta a animação se o elemento sair da tela (em dispositivos maiores)
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });

        // Inicializa o carrossel da seção "Sobre Mim" (facts-list)
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: { items: 1, margin: 0 },
                    576: { items: 2, margin: 20 },
                    992: { items: 3, margin: 30 }
                }
            });
        }

        // Inicializa o carrossel da seção "Serviços"
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: { items: 1, margin: 0 },
                    576: { items: 2, margin: 20 },
                    992: { items: 3, margin: 30 }
                }
            });
        }

        // Inicializa o carrossel da seção "Meu Trabalho" (galeria)
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: { items: 1, margin: 0 },
                    576: { items: 2, margin: 20 },
                    992: { items: 3, margin: 30 }
                }
            });
        }

        // Inicializa o carrossel da seção "Depoimentos"
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: { items: 1, margin: 0 },
                    768: { items: 1 }
                }
            });
        }

        // Inicializa o plugin fullPage.js para a navegação de tela cheia
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: 'C7F41B00-5E824594-9A5EFB99-B556A3D5', // Chave de licença
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
                menu: '#nav', // Conecta a navegação ao menu
                lazyLoad: true,
                navigation: true, // Mostra a navegação de pontos à direita
                navigationPosition: 'right',
                scrollOverflow: true, // Permite scroll dentro de seções com muito conteúdo
                responsiveWidth: 768, // Desativa o fullpage em telas menores que 768px
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }

        // Eventos de clique para a navegação mobile e o botão "Role para Baixo"
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown(); // API do fullPage.js para rolar para a próxima seção
        });

        // Animação do contador de números na seção "Sobre Mim"
        $('.facts-row').on('inview', function(event, isInView) {
            if (isInView) {
                $('.count-number').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                // Remove a classe para que a animação não rode novamente
                $(this).find('.count-number').removeClass('count-number').addClass('counted');
            }
        });

        // *** MELHORIA: Lógica dinâmica para as barras de habilidade ***
        $('.skills-row').on('inview', function(event, isInView) {
            if (isInView) {
                $('.skill-item').each(function() {
                    // Encontra a barra preenchida e o span com a porcentagem
                    var $filledBar = $(this).find('.filled-bar, .filled-bar-2');
                    var $percentageSpan = $(this).find('span');
                    
                    // Pega o texto da porcentagem (ex: "70%")
                    var percentageText = $percentageSpan.text();
                    
                    // Aplica a largura dinamicamente à barra
                    $filledBar.css('width', percentageText);
                    
                    // Move o span para a posição correta na barra
                    $percentageSpan.css('left', 'calc(' + percentageText + ' - 25px)');
                });
            }
        });

    });

})(jQuery, window, document);
