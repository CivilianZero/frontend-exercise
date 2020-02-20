<template>
    <div class="container" style="min-height: 80vh; display: flex; align-items: center;">
        <div class="mx-auto" style="width: 600px;">
            <div class="card" style="height: 400px;">
                <div class="card-header">
                    <h3>Question {{ count+1 }}</h3>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ currentQuestion().text }}</h5>
                    <div class="card-text">
                        <div v-for="(answer, aIndex) in currentQuestion().answers"
                             :key="aIndex">
                            <label>
                                <input :name="'quizQuestion'+count" :value="answer"
                                       type="radio" v-model="givenAnswers['question'+(count+1)]">
                                {{ answer }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button type="button" class="btn btn-primary col-4" @click="nextQuestion">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      questions: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        count: 0,
        givenAnswers: {
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: ''
        }
      };
    },
    methods: {
      nextQuestion() {
        if (this.count === 4) {
          // eslint-disable-next-line no-console
          console.log(this.givenAnswers);
        } else {
          this.count += 1;
        }
      },
      currentQuestion() {
        return this.questions[this.count]
      }
    }
  };
</script>
