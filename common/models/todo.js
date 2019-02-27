'use strict';

module.exports = function(Todo) {

    Todo.greet = function(msg, cb) {
        cb(null, 'Greetings... ' + msg);
    }

    Todo.remoteMethod('greet', function (ctx, instance, next){
        accepts:[ {arg: 'title', type: 'string',},
            {arg: 'description', type: 'string',},
            {arg: 'date', type: 'date',},
            {arg: 'isComplete', type: 'boolean',},
            {arg: 'id', type: 'integer',},
            {arg: 'usuarioId', type: 'string',}],

        returns: [{arg: 'Prepara examen', type: 'string'},
            {arg: 'Preparar el examen para recuperacion', type: 'string'},
            {arg: ctx.args.date, type: 'date'},
            {arg: ctx.args.isComplete, type: 'boolean'},
            {arg: 'id', type: 'integer'},
            {arg: 'usuarioId', type: 'ingeter'},]
});
};
