var formMixin = {

    data: function() {
        return {
            errors: new FormErrors(),
            loading: false,
            actionUrl: ''
        };
    },

    mounted: function() {
        var
            component = this,
            $form = $(this.$el);

        var $loaderLayer = $('<div>', {
            class: 'form-loading-layer',
            style: 'position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%; background:white; opacity:0.4; display:none'
        });

        $form.css('position', 'relative').append($loaderLayer);

        $form.submit(function() {
            component.errors.clear();
            component.send();

            return false;
        });
    },

    watch: {
        loading: function(state) {
            var $form = $(this.$el);

            $form.find('.form-loading-layer').toggle(state);
            $form.find(':input').prop('disabled', state);
        }
    },

    methods: {

        post: function (object, callback) {
            var component = this;

            this.postHandler(this.actionUrl, object, function(response) {
                if( ! response.notified && response.type) {
                    var type = response.type + 'FM';

                    noty( $.extend({}, APP.noti[type]('lg', 'full'), {
                        text: response.message,
                        layout: 'bottomRight'
                    }));
                }
                if(response.url) {
                    window.location.href = response.url;
                }

                if(callback) {
                    callback.apply(component, arguments);
                }
            });
        },

        postHandler: function(url, object, callback) {
            var component = this;

            this.loading = true;

            $.post(url, object)
                .always(function() {
                    component.loading = false
                })
                .done(function(response) {
                    if(callback) {
                        callback.apply(component, arguments);
                    }
                })
                .fail(function(response) {
                    component.errors.record(response.responseJSON.errors);
                });
        }
    }

};
