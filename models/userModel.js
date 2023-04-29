const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    playlists: {
<<<<<<< HEAD
        type: Array,
        required: false
    },    
},
{timestamps: true});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model('user', userSchema);
=======
      type: Array,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
>>>>>>> b02359d98ea123451f133a7d89a037061894b3a0
