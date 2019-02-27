'use strict';

module.exports = function(Usuario) {
    Usuario.beforeRemote('create', function(ctx, instance, next) {
        context.args.date = Date.now();
        context.args.data.id = context.req.accessToken.userId;
        next();
    });
    Usuario.afterRemote( 'fecha',function (ctx,instance,next) {
        var fechaActual = ctx.args.data = new Date();
        var fecha = ctx.args.date;
        if (fecha < fechaActual){
            next(new Error('No es posible generar un evento pasado'));
        }else{
            next();
        }
    });
};
