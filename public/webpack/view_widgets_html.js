var widgets_html = {
    init() {
        if ($('.widgets-html-page').length === 0) {
            return false;
        }
        this.slick();
        this.oldControls();
        this.openMobileToogle();
        this.initChartJS();
        this.widgetsHtmlCompareMode();
    },
    slick() {
        if (!$('[data-slick="true"]').length) {
            return false;
        }

        var newsSlider = $('.card--news .card__slider'),
                cardNewsHeaderH = $('.card--news .card__header').height(),
                cardH = $('.card--news').height() - (cardNewsHeaderH + 12);

        var slick_options = {
            arrows: false,
            autoplay: false,
            dots: false,
            speed: 350
        };

        $('[data-slick="true"]').not('.slick-initialized').slick(slick_options);

        //custom buttons
        $(document).on('click', '[data-slickPrev="true"]', function (e) {
            newsSlider.slick('slickPrev');
        });

        $(document).on('click', '[data-slickNext="true"]', function (e) {
            newsSlider.slick('slickNext');
        });

        $('.card--news .slick-slide').css('height', cardH);
    },
    oldControls() {
        //widget edit control
        (function editWidgets() {
            $('#widgets-edit').on('click', function (e) {
                e.preventDefault();
                var grid = $('.grid-stack').data('gridstack');

                if ($('.app-content').hasClass('app-content--widgets-movable')) {
                    grid.disable();

                    $(this).children('i').removeClass('icon--widgets-edit-alt').addClass('icon--widgets-edit');
                    $('.app-content').toggleClass('app-content--widgets-movable');
                    $('.app-content').removeClass('app-content--widgets-editable');
                } else {
                    grid.enable();

                    $(this).children('i').removeClass('icon--widgets-edit').addClass('icon--widgets-edit-alt');
                    $('.app-content').toggleClass('app-content--widgets-movable');
                }
                // $(this).data("enabled", !enabled);
            });

            //manual close button
            $('.card-bar__close').on('click', function (e) {
                $('.app-content').toggleClass('app-content--widgets-movable');
            });

            //widgets editable view
            $(document).on('click', '.remove-button', function () {
                var grid = $('.grid-stack').data('gridstack'),
                        el = $(this).closest('.grid-stack-item');

                grid.remove_widget(el);
            });

            $(document).on('click', '.card__edit-icons *', function () {
                var el = $(this).closest('.grid-stack-item');
                el.css('z-index', '7');
            });

            $(document).on('click', '.card__edit-view .ddown__menu li', function () {
                $('.app-content').addClass('app-content--widgets-editable');
            });
        })();
    },
    openMobileToogle() {
        var toogleOpen = true;
        $('.card__mobile-toggle').click(function () {
            var locationBlock = $(this).closest('.card').find('.mobile-toogle--target');
            if (toogleOpen === true) {
                locationBlock.css('display', 'block');
                locationBlock.closest('.card').addClass('card--mobile-toggled');
                toogleOpen = false;
            } else {
                locationBlock.css('display', 'none');
                locationBlock.closest('.card').removeClass('card--mobile-toggled');
                toogleOpen = true;
            }
        });
    },
    initChartJS() {
        function lineChartJS(targetBlock, quantityColumns, backgroundColorChart, borderColorChart) {
            var self = this;
            // console.log(self.bottomBar)
            quantityColumns = 10;
            var infoTable;
            var quantityColumnsArray = [];
            var quantityRandom = [];
            var quantityRandom2 = [];
            for (var i = 0; i < quantityColumns; i++) {
                quantityColumnsArray.push('Data Stream ' + (i + 1));
                quantityRandom.push(Math.floor(Math.random() * 100 + 1));
                quantityRandom2.push(Math.floor(Math.random() * 100 + 1));
            }

            var domObject = document.getElementById(targetBlock);
            if (domObject === null) {
                return;
            }
            var ctx = domObject.getContext('2d');

            infoTable = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: quantityColumnsArray,
                    datasets: [
                        {
                            backgroundColor: backgroundColorChart,
                            borderColor: borderColorChart,
                            borderWidth: 1,
                            data: quantityRandom,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent'
                        }
                    ]
                },
                options: {
                    //options start
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: false,
                    scales: {
                        yAxes: [
                            {
                                display: false,
                                // display:false,    //#76 Artificial error
                                ticks: {
                                    beginAtZero: false,
                                    callback: function (label) {
                                        return label + ' $';
                                    }
                                }
                            }
                        ],
                        xAxes: [
                            {
                                display: false
                            }
                        ]
                    }
                }
            });
        }

        function lineDoubleChartJS(targetBlock, quantityColumns, backgroundColorChart, borderColorChart, backgroundColorChart2, borderColorChart2) {
            var self = this;
            // console.log(self.bottomBar)
            quantityColumns = 10;
            var infoTable;
            var quantityColumnsArray = [];
            var quantityRandom = [];
            var quantityRandom2 = [];
            for (var i = 0; i < quantityColumns; i++) {
                quantityColumnsArray.push('Data Stream ' + (i + 1));
                quantityRandom.push(Math.floor(Math.random() * 100 + 1));
                quantityRandom2.push(Math.floor(Math.random() * 100 + 1));
            }

            if (document.getElementById(targetBlock) === null) {
                return;
            }

            var ctx = document.getElementById(targetBlock).getContext('2d');
            infoTable = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: quantityColumnsArray,
                    datasets: [
                        {
                            backgroundColor: backgroundColorChart,
                            borderColor: borderColorChart,
                            borderWidth: 1,
                            data: quantityRandom,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent'
                        },
                        {
                            backgroundColor: backgroundColorChart2,
                            borderColor: borderColorChart2,
                            borderWidth: 1,
                            data: quantityRandom2,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent'
                        }
                    ]
                },
                options: {
                    //options start
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: false,
                    scales: {
                        yAxes: [
                            {
                                display: false,
                                // display:false,    //#76 Artificial error
                                ticks: {
                                    beginAtZero: false,
                                    callback: function (label) {
                                        return label + ' $';
                                    }
                                }
                            }
                        ],
                        xAxes: [
                            {
                                display: false
                            }
                        ]
                    }
                }
            });
        }

        function barChartJS(targetBlock, quantityColumns, backgroundColorChart, hoverBackground, backgroundColorChart2, hoverBackground2) {
            var self = this;
            // console.log(self.bottomBar)
            quantityColumns = 10;
            var infoTable;
            var quantityColumnsArray = [];
            var quantityRandom = [];
            var quantityRandom2 = [];
            for (var i = 0; i < quantityColumns; i++) {
                quantityColumnsArray.push('Data Stream ' + (i + 1));
                quantityRandom.push(Math.floor(Math.random() * 100 + 1));
                quantityRandom2.push(Math.floor(Math.random() * 100 + 1));
            }
            if (document.getElementById(targetBlock) === null) {
                return;
            }
            var ctx = document.getElementById(targetBlock).getContext('2d');
            infoTable = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: quantityColumnsArray,
                    datasets: [
                        {
                            backgroundColor: backgroundColorChart,
                            hoverBackgroundColor: hoverBackground,
                            data: quantityRandom
                        },
                        {
                            backgroundColor: backgroundColorChart2,
                            hoverBackgroundColor: hoverBackground2,
                            data: quantityRandom2
                        }
                    ]
                },
                options: {
                    //options start
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: false,
                    scales: {
                        yAxes: [
                            {
                                display: false
                            }
                        ],
                        xAxes: [
                            {
                                display: false,
                                barPercentage: 1 //width bar
                            }
                        ]
                    }
                }
            });
        }

        function barHorChartJS(targetBlock, quantityColumns, backgroundColorChart, hoverBackground, backgroundColorChart2, hoverBackground2) {
            var self = this;
            // console.log(self.bottomBar)
            quantityColumns = 10;
            var infoTable;
            var quantityColumnsArray = [];
            var quantityRandom = [];
            var quantityRandom2 = [];
            for (var i = 0; i < quantityColumns; i++) {
                quantityColumnsArray.push('Data Stream ' + (i + 1));
                quantityRandom.push(Math.floor(Math.random() * 100 + 1));
                quantityRandom2.push(Math.floor(Math.random() * 100 + 1));
            }
            if (document.getElementById(targetBlock) === null) {
                return;
            }
            var ctx = document.getElementById(targetBlock).getContext('2d');
            infoTable = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: quantityColumnsArray,
                    datasets: [
                        {
                            backgroundColor: backgroundColorChart,
                            hoverBackgroundColor: hoverBackground,
                            data: quantityRandom
                        },
                        {
                            backgroundColor: backgroundColorChart2,
                            hoverBackgroundColor: hoverBackground2,
                            data: quantityRandom2
                        }
                    ]
                },
                options: {
                    //options start
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: false,
                    scales: {
                        yAxes: [
                            {
                                display: false
                            }
                        ],
                        xAxes: [
                            {
                                display: false,
                                barPercentage: 1 //width bar
                            }
                        ]
                    }
                }
            });
        }


        lineChartJS('one-line', 10, 'rgba(39,174,96,.3)', '#67c68f');
        lineDoubleChartJS('two-line', 10, 'rgba(126, 86, 194, 0.3)', '#7e57c2', 'rgba(230, 232, 235, 0.4)', '#e1e3e6');
        barChartJS('two-bar', 10, '#ffa726', '#ef9c23', '#e1e3e6', '#d4d6d8');
        barHorChartJS('two-bar--hor', 10, 'rgba(0, 145, 234, 0.3)', 'rgba(0, 145, 234, 0.6)', 'rgba(230, 232, 235, 0.4)', '#d4d6d8');
    },

    widgetsHtmlCompareMode() {
        window.requestAnimationFrame(() => {
            $('.compare-mode--checkbox').on('ifToggled', function () {
                var thisChart = $(this).closest('.card--chart')
                if (thisChart.hasClass('card--compare')) {
                    thisChart.removeClass('card--compare')
                } else {
                    thisChart.addClass('card--compare')
                }
                $(this).adjustCardHeight();
            })
        })
    }
};

$(function () {
    widgets_html.init();
});
