const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  review: [
    {
      author_cred: {
        q1: {
          type: Number,
        },
        q2: {
          type: Number,
        },

        q3: {
          type: Number,
        },
        q4: {
          q4_1: {
            type: Number,
          },
          q4_2: {
            type: Number,
          },
        },
        remark: {
          type: String,
        },
      },

      publisher_cred: [
        {
          q1: {
            type: Number,
          },
        },
      ],
      general: [
        {
          q1: {
            type: Number,
          },
          q2: {
            type: Number,
          },

          q3: {
            type: Number,
          },
          q4: { type: Number },
        },
      ],
      physical: [
        {
          q1: {
            type: Number,
          },
          q2: {
            type: Number,
          },

          q3: {
            type: Number,
          },

          q4: { type: Number },

          q5: {
            type: Number,
          },
          q6: {
            type: Number,
          },

          q7: {
            type: Number,
          },

          q8: { type: Number },

          q9: {
            type: Number,
          },
          q10: {
            type: Number,
          },

          q11: {
            type: Number,
          },

          q12: { type: Number },

          q13: {
            type: Number,
          },
          q14: {
            type: Number,
          },

          q15: {
            type: Number,
          },

          q16: { type: Number },

          q17: {
            type: Number,
          },
          q18: {
            type: Number,
          },
        },
      ],

      subject: [
        {
          q1: {
            type: Number,
          },
          q2: {
            type: Number,
          },

          q3: {
            type: Number,
          },

          q4: { type: Number },

          q5: {
            type: Number,
          },
          q6: {
            type: Number,
          },

          q7: {
            type: Number,
          },

          q8: { type: Number },

          q9: {
            type: Number,
          },
          q10: {
            type: Number,
          },

          q11: {
            type: Number,
          },

          q12: { type: Number },

          q13: {
            type: Number,
          },
          q14: {
            type: Number,
          },

          q15: {
            type: Number,
          },
        },
      ],

      language: [
        {
          q1: {
            type: Number,
          },
          q2: {
            type: Number,
          },

          q3: {
            type: Number,
          },

          q4: { type: Number },

          q5: {
            type: Number,
          },
          q6: {
            type: Number,
          },

          q7: {
            type: Number,
          },

          q8: { type: Number },
        },
      ],

      illus: [
        {
          q1: {
            type: Number,
          },
          q2: {
            type: Number,
          },

          q3: {
            type: Number,
          },
        },
      ],

      ethical: [
        {
            q1:{
                type: Boolean
            },
            q2:{
                type: Boolean
            },
            q3:{
                type: Boolean
            },
        }
      ]
    },
  ],
  final_author_cred: {
    type: Number,
  },
  final_author_cred_percentage: {
    type: Number,
  },
  final_publisher_cred: {
    type: Number,
  },
  final_publisher_cred_percentage: {
    type: Number,
  },
  final_general: {
    type: Number,
  },
  final_general_percentage: {
    type: Number,
  },

  final_physical: {
    type: Number,
  },
  final_physical_percentage: {
    type: Number,
  },
  final_subject: {
    type: Number,
  },
  final_subject_percentage: {
    type: Number,
  },
  final_language: {
    type: Number,
  },
  final_language_percentage: {
    type: Number,
  },
  final_illus: {
    type: Number,
  },
  final_illus_percentage: {
    type: Number,
  },
  grand_final:{
    type:Number
  },
  grand_final_percentage:{
    type:Number
  },
  grade:{
    type: Number
  }
});

module.exports = mongoose.model("Book", bookSchema);
