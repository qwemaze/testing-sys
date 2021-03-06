const question = require( '../../requireAll' )( './class/question' );
const Log = require('debug')('app:model:extender:question');

const useSchema = ( schema ) => {
	schema.pre( 'save', function ( next ) {
		Log(this)
		if ( !this.type || typeof this.type !== 'string' || !question[ this.type ] ) throw new Error( 'Invalid input.' );
		question[ this.type ]( this );
		next();
	} );

	schema.method( 'check', function (att) {
        if(String(att.question) !== String(this._id)) return false;
		return question[ this.type ]( this ).check( att );
	} );
};

const useModel = ( model ) => {

};

const useRouter = ( router ) => {
	router.get( `/:id?`, (req, res, next) => {
		Log("MUAHAHAHAHAH");
		next();
	});
};

module.exports = {
	useSchema,
	useModel,
	useRouter
};
