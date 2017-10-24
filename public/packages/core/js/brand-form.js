//$(document).ready(function () {
//    var Form;
//    Form = {};
//    /* Init  */
//    Form.init = function () {
//        Form.checkbox = $('input:checkbox.brand-selector');
//        Form.container = $('div.brands-select-container');
//        Form.changeState = function (checkbox) {
//            if (checkbox.checked) {
//                Form.container.removeClass('hidden');
//            } else {
//                Form.container.addClass('hidden');
//            }
//        },
//                Form.syntaxHighlight = function () {
//                    if (!$('[data-id="page-email-settings"]').length) {
//                        return false;
//                    }
//
//                    var emailHeaderHtml = document.getElementById('email-header-html');
//                    var emailStyles = document.getElementById('email-styles');
//                    var emailFooterHtml = document.getElementById('email-footer-html');
//                    var myCodeMirrorEmailHeaderHtml = CodeMirror.fromTextArea(emailHeaderHtml, {
//                        lineNumbers: true,
//                        theme: 'ambiance',
//                        lineWrapping: true,
//                        mode: "xml",
//                        htmlMode: true,
//                        styleActiveLine: true,
//                        matchBrackets: true,
//                        scrollbarStyle: "simple",
//                    });
//                    myCodeMirrorEmailHeaderHtml.inputRead
//
//                    var myCodeMirrorEmailStyles = CodeMirror.fromTextArea(emailStyles, {
//                        lineNumbers: true,
//                        theme: 'ambiance',
//                        lineWrapping: true,
//                        mode: "css",
//                        styleActiveLine: true,
//                        matchBrackets: true,
//                        scrollbarStyle: "simple",
//                    });
//                    var myCodeMirrorEmailFooterHtml = CodeMirror.fromTextArea(emailFooterHtml, {
//                        lineNumbers: true,
//                        theme: 'ambiance',
//                        lineWrapping: true,
//                        mode: "xml",
//                        htmlMode: true,
//                        styleActiveLine: true,
//                        matchBrackets: true,
//                        scrollbarStyle: "simple",
//                    });
//                    var delay;
//                    myCodeMirrorEmailHeaderHtml.on("change", function () {
//                        clearTimeout(delay);
//                        delay = setTimeout(updatePreview, 300);
//                    });
//                    myCodeMirrorEmailStyles.on("change", function () {
//                        clearTimeout(delay);
//                        delay = setTimeout(updatePreview, 300);
//                    });
//                    myCodeMirrorEmailFooterHtml.on("change", function () {
//                        clearTimeout(delay);
//                        delay = setTimeout(updatePreview, 300);
//                    });
//                    function updatePreview() {
//                        var previewFrame = document.getElementById('preview'),
//                                preview = previewFrame.contentDocument || previewFrame.contentWindow.document,
//                                content = $('.content').html();
//
//                        preview.open();
//                        preview.write(myCodeMirrorEmailHeaderHtml.getValue() + content + myCodeMirrorEmailFooterHtml.getValue());
//                        preview.close();
//                        loadCSS();
//                    }
//
//
//                    setTimeout(updatePreview, 300);
//                    function loadCSS() {
//                        var $head = $("#preview").contents().find("head");
//                        $head.html("<style>" + myCodeMirrorEmailStyles.getValue() + "</style>");
//                    }
//                },
//                Form.updateCodeMirror = function (data) {
//                    var cm = $('.CodeMirror')[0].CodeMirror;
//                    var doc = cm.getDoc();
//                    var cursor = doc.getCursor();
//                    var line = doc.getLine(cursor.line);
//                    var pos = {
//                        line: cursor.line,
//                        ch: line.length - 1
//                    }
//                    doc.replaceRange('\n' + data + '\n', pos);
//                },
//                Form.insertVariable = function (handler) {
//                    this.updateCodeMirror('[[ ' + handler.attr('title') + ' ]]');
//                    return false;
//                },
//                Form.insertInstruction = function (handler) {
//                    this.updateCodeMirror(handler.attr('title'));
//                    return false;
//                }
//    };
//    /* checkable import checkbox */
//    $('input:checkbox.brand-selector').on('ifChanged', function (e) {
//        e.preventDefault();
//        Form.changeState(this);
//        return true;
//    });
//    $(function () {
//        Form.init();
//        Form.syntaxHighlight();
//        $('a.insert-variable').click(function (e) {
//            Form.insertVariable($(this));
//        });
//        $('a.insert-instruction').click(function (e) {
//            Form.insertInstruction($(this));
//        });
//    });
//});
//
