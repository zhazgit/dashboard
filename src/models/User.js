const {Schema, model} = require('mongoose');
const bcrypt =  require('bcrypt');

const UserSchema = new Schema({
    img: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    cnpj_cpf: {type: String, required:true},
    senha: {type: String, required: true},
    admin: {type: Boolean, required:true}
},
{
    timestamps:true
});

UserSchema.methods.encryptPassword = async senha => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(senha,salt);
};

UserSchema.methods.matchPassword = async function(senha) {
    return await bcrypt.compare(senha, this.senha);
}



module.exports = model('User', UserSchema);