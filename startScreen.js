/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '6b6ca046-473c-4601-9541-fc02f086f347';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Map",
    "location": "Map.html"
}, {
    "name": "panel",
    "location": "panel.html"
}];

startScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_2': 'startScreen_mobilelist_2',
        'mobilelistitem_3': 'startScreen_mobilelistitem_3',
        'mobilelistitembutton_4': 'startScreen_mobilelistitembutton_4',
        'mobilebutton_6': 'startScreen_mobilebutton_6',
        'photPreview': 'startScreen_photPreview'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    restservice1 = new Apperyio.DataSource(WarehouseDB_Merchandise_list_service, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'mobilelistitem_3',
            'SET': [{
                'PATH': ['item'],
                'ID': 'mobilelistitem_3',
                'ATTR': '@',
                'SUBSELECTOR': 'h3'
            }]
        }],
        'requestMapping': [{
            'PATH': ['X-Appery-Database-Id'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': '{database_id}'
        }]
    });

    datasources.push(restservice1);

    camera_shot = new Apperyio.DataSource(CameraService, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['imageDataBase64'],
            'ID': 'photPreview',
            'ATTR': 'src'
        }],
        'requestMapping': [{
            'PATH': ['quality'],
            'TYPE': 'STRING',
            'ATTR': '80'
        }, {
            'PATH': ['destinationType'],
            'TYPE': 'STRING',
            'ATTR': 'Data URL'
        }, {
            'PATH': ['sourcetype'],
            'TYPE': 'STRING',
            'ATTR': 'Camera'
        }, {
            'PATH': ['allowedit'],
            'TYPE': 'STRING',
            'ATTR': 'true'
        }, {
            'PATH': ['encodingType'],
            'TYPE': 'STRING',
            'ATTR': 'JPEG'
        }, {
            'PATH': ['targetWidth'],
            'TYPE': 'STRING',
            'ATTR': '1024'
        }, {
            'PATH': ['targetHeight'],
            'TYPE': 'STRING',
            'ATTR': '768'
        }]
    });

    datasources.push(camera_shot);

    /*
     * Events and handlers
     */

    // Before Show
    var startScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "startScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events
    var startScreen_windowEvents = function() {

            $('#startScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });
            $('#startScreen').on({
                pageshow: function() {
                    try {
                        restservice1.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                },
            });

        };

    // device events
    var startScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var startScreen_elementsExtraJS = function() {
            // screen (startScreen) extra code

            /* mobilelist_2 */

            listView = $("#startScreen_mobilelist_2");
            theme = listView.attr("data-theme");
            if (typeof theme !== 'undefined') {
                var themeClass = "ui-btn-up-" + theme;
                listItem = $("#startScreen_mobilelist_2 .ui-li-static");
                $.each(listItem, function(index, value) {
                    $(this).addClass(themeClass);
                });
            }

            /* mobilelistitem_3 */

        };

    // screen elements handler
    var startScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilelistitem_3"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('panel', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilelistitem_3"]');

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilebutton_6"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        try {
                            camera_shot.execute({})
                        } catch (ex) {
                            console.log(ex.name + '  ' + ex.message);
                            hideSpinner();
                        };

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilebutton_6"]');

        };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});