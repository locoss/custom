function Test() {
    this.requestData = {
        splitModel: 'all',
        campaign: {
            name: {
                isSplit: false,
                data: 'MobileCampaign25'
            },
            objective: {
                isSplit: false,
                data: 'MOBILE_APP_INSTALL'
            }
        },
        adSet: {
            name: {
                isSplit: false,
                autoName: true,
                data: [
                    'objective',
                    'placement',
                    {'count': true},
                    {'custom_text': 'XSuperb'},
                    {'delimiter': '_'}
                ]
            },
            budget: {
                isSplit: true,
                data: [
                    {
                        budget_type: 'AVERAGE',
                        budget: '25'
                    },
                    {
                        budget_type: 'AVERAGE',
                        budget: '10'
                    }
                ]
            },
            audience: {
                isSplit: false,
                data: 'myTemplate25'
            },
            targeting: {
                isSplit: false,
                isComplex: true,
                data: {
                    custom_audiences: {
                        isSplit: true,
                        data: [
                            [{"id": 6004192254512}],
                            [{"id": 6004192254513}]
                        ]
                    },
                    excluded_custom_audiences: {
                        isSplit: true,
                        data: [
                            [{"id": 6004192254514}],
                            [{"id": 6004192254516}]
                        ]
                    },
                    geo_locations: {
                        isSplit: true,
                        data: [
                            {countries: [], cities: [], zip_code: []},
                            {countries: [], cities: []}
                        ]
                    },
                    age: {
                        isSplit: true,
                        isComplex: true,
                        data: [
                            {
                                age_min: {
                                    isSplit: false,
                                    data: 13
                                },
                                age_max: {
                                    isSplit: false,
                                    data: 21
                                }

                            },
                            {
                                age_min: {
                                    isSplit: false,
                                    data: 14
                                },
                                age_max: {
                                    isSplit: false,
                                    data: 25
                                }

                            },
                        ]
                    },
                    genders: {
                        isSplit: true,
                        data: [
                            []
                        ]
                    }
                }
            }
        },
        adGroup: {
            name: {
                isSplit: false,
                autoName: true,
                data: [
                    'objective',
                    'placement',
                    {'count': true},
                    {'custom_text': 'ttt'},
                    {'delimiter': '_'}
                ]
            }
            ,
            related_fan_page: {
                isSplit: false,
                data: 'SomeFanPage'
            }
            ,
            type: {
                isSplit: false,
                data: 'multiple'
            }
            ,
            title: {
                isSplit: false,
                data: 'ATTENTION!'
            }
            ,
            body: {
                isSplit: false,
                data: 'Make your phone more individual.'
            }
            ,
            format: {
                isSplit: true,
                data: [
                    {
                        type: 'single_image',
                        data: [
                            {
                                id: '32156487554',
                                enable: true
                            },
                            {
                                id: '32156487553',
                                enable: true
                            },
                            {
                                id: '32156487552',
                                enable: false
                            }
                        ]
                    },
                    {
                        type: 'video',
                        data: {
                            video_id: '13215644',
                            thumbnail_id: '32154567125',
                            enable: true,
                            srt_id: '32134567',
                            best_perfom: true
                        }
                    },
                    {
                        type: 'video',
                        data: {
                            video_id: '13215642',
                            thumbnail_id: '32154567123',
                            enable: true,
                            srt_id: '32134521',
                            best_perfom: false
                        }
                    }
                ]
            }
        }
    };

    this.getDataByPath = function () {
        var paths = ['fkey', 'fkey.skey', 'fkey.skey.tkey', 'fkey.skey.tkey.frkey'];
        var data = {
            fkey: {
                skey: {
                    tkey: {
                        frkey: 'hello'
                    }
                }
            }
        };

        /**
         *
         * @param path string 'my.custom.path.in.map'
         * @param data map object
         */
        function getDataByPath(path, data) {
            return (function getData(data, keys, key) {
                var currentKey = keys[key],
                    current = data[currentKey];
                key += 1;
                var nextKey = keys[key];

                if (nextKey !== undefined && current[nextKey] !== undefined) {
                    return getData(current, keys, key);
                }
                return current;
            })(data, path.split('.'), 0);
        }


        var r = paths.map(function (key, i) {
            return getDataByPath(key, data);
        });

        console.log(r[0] == data.fkey);
        console.log(r[1] == data.fkey.skey);
        console.log(r[2] == data.fkey.skey.tkey);
        console.log(r[3] == data.fkey.skey.tkey.frkey);
    };

    this.setDataByPath = function () {
        var paths = [
            {
                key: 'fkey',
                value: {}
            },
            {
                key: 'fkey.skey',
                value: {
                    tkey: {}
                }
            },
            {
                key: 'fkey.skey.tkey',
                value: 'hello'
            }
        ];
        var data = {};

        /**
         *
         * @param path string 'my.custom.path.in.map'
         * @param data map object
         */
        function setDataByPath(path, dataToInsert, storageData) {
            function setData(dataToInsert, dataToSave, keys, key) {
                var currentKey = keys[key],
                    current = data[currentKey];
                key += 1;
                var nextKey = keys[key];

                if (nextKey !== undefined) {
                    if (current[nextKey] !== undefined) {

                    }
                    return setData(current, keys, key);
                }
                return current;
            };
        }


        var r = paths.map(function (key, i) {
            return setDataByPath(key, data);
        });

        console.log(r[0] == data.fkey);
        console.log(r[1] == data.fkey.skey);
        console.log(r[2] == data.fkey.skey.tkey);
        console.log(r[3] == data.fkey.skey.tkey.frkey);
    };

    this.customEach = function () {
        /**
         *
         * var o = {
         *   a: {value:1},
         *   b: {value:2},
         *   c: {value:3}
         * };

         * function c (item, key) {
         *      console.log(item);
         * }
         *
         * customEach(o, c);
         *
         */
        function each(o, c, returnFlag) {
            var _keys = Object.keys(o).reduce(function (p, k) {
                return p.concat(o[k]);
            }, []);

            returnFlag = (returnFlag !== undefined) ? returnFlag : false;
            var fn = (returnFlag) ? 'reduce' : 'forEach',
                res = _keys[fn](c);

            return (returnFlag) ? res : null;
        }

        var data = {f: 1, s: 2, t: 3},
            r = each(data, function (cur) {
                return cur;
            }),
            r2 = each(data, function (prev, cur) {
                return prev + cur;
            }, true);

        console.log(r === null);
        console.log(r2 === 6);
    }
}
