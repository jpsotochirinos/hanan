module.exports = function(app) {
    app.dataSources.firebase_realtime.automigrate('category', function(err) {
        if (err) throw err;

        app.models.category.create([{
            name: 'Danza Luces',
            detail: 'Esta es el tipo danza luces',
            image:'',
            state:true,
            location:{
                latitude: "40.34",
                longitude: "324.434"
            },
            popularity: 0.5,
            fragment:[
                {
                    type:'details',
                    content:'Esta es el tipo danza luces'
                },
                {
                    type:'schedule',
                    content:'idcronograma'
                },
                {
                    type:'suggesstions',
                    content:[
                        {
                            id:'id1'
                        },
                        {
                            id:'id2'
                        },
                        {
                            id:'id3'
                        }
                    ]
                }

            ],
            root:
            {
                idroot:'idroot'
            },
            created_date:Date.now(),
            updated_date:Date.now()

        }], function(err, category) {
            if (err) throw err;

            console.log('Models created: \n', category);
        });
    });

    app.dataSources.firebase_realtime.automigrate('schedule', function(err) {
        if (err) throw err;

        app.models.schedule.create([{
            name:'parada numero uno',
            detail: 'soy la parada numero 1',
            date: new Date(2019,1,11,15,24,0),
            state: true,
            location:{
                latitude: "40.34",
                longitude: "324.434"
            },
            interaction:0.5,
            created_date: Date.now(),
            updated_date: Date.now()
        }], function(err, schedule) {
            if (err) throw err;

            console.log('Models created: \n', schedule);
        });
    });

    app.dataSources.firebase_realtime.automigrate('list', function(err) {
        if (err) throw err;

        app.models.list.create([{
            category:{
                id:'idcategory'
            },
            date: new Date(2019,1,11,15,24,0),
            state: true,
            activity: true,
            interaction:0.5,
            type:'parada',
            order:'56',
            ranking:{
                parada:93,
                estadio:45
            },
            created_date: Date.now(),
            updated_date: Date.now()
        }], function(err, list) {
            if (err) throw err;

            console.log('Models created: \n', list);
        });
    });
 

};