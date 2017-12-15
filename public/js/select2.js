Vue.component('select2', {
    template: '<select v-model="selected" :name="name"><option v-for="option in options" :value="option.id" :disabled="option.disabled" :selected="option.selected">{{ option.text }}</option></select>',
    props: {
        name: {
            type: String
        },

        options: {
            type: Array
        },

        selected: {},

        placeholder: {
            type: String,
            default: ''
        },

        disabled: {
            type: Boolean,
            default: false
        },

        config: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data: function() {
        return {
            selectorConfig: {}
        };
    },

    mounted: function() {
        var component = this;

        this.refresh();

        $(this.$el).on('change', function() {
            var
                id = $(this).val(),
                data = _.find(component.options, function(item) {
                    return item.id.toString() === id;
                });

            component.$emit('change', id, data);
        });

        if(this.selected) {
            this.select(this.selected);
        }
    },
    watch: {
        disabled: function(state) {
            $(this.$el).prop('disabled', state);
        },

        options: function() {
            this.refresh();
        },

        selected: function(id) {
            this.select(id);
        }
    },
    methods: {
        refresh: function() {
            var config = {
                placeholder: this.placeholder,
                escapeMarkup: function (m) {
                    return m;
                }
            };

            this.selectorConfig = _.merge(config, this.config);

            $(this.$el).val('0').select2(this.selectorConfig);
        },

        select: function(id, silence) {
            var $select = $(this.$el);

            if(id) {
                var selectedId = id.toString();

                $select
                    .val(selectedId)
                    .find('option')
                    .filter(function() {
                        return $(this).attr('value').toString() === selectedId;
                    })
                    .attr('selected', 'selected')
                    .prop('selected', true);
            }
            else {
                $select
                    .val('0')
                    .find('option')
                    .removeAttr('selected')
                    .prop('selected', false);
            }

            if(! silence) {
                $select.trigger('change');
            }

        }

    }
});
