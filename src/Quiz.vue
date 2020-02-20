<template>
    <div class="container">
        <div class="mx-auto">
            <div class="card">
                <div class="card-header">
                    <h3 v-if="count < 5">Question {{ count+1 }}</h3>
                    <h3 v-else>Results</h3>
                </div>
                <div class="card-body" v-if="count < 5">
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
                <div class="card-body" v-else>
                    <div v-for="(question, index) in questions" :key="'result'+index">
                        <span class="bold">{{ question.text }}: {{ givenAnswers['question'+(index+1)]}}</span>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button :disabled="givenAnswers['question'+(count+1)] === ''" @click="nextQuestion"
                            class="btn btn-primary col-4"
                            type="button" v-if="count < 5">Next
                    </button>
                    <button class="btn btn-secondary" v-else @click="restartQuiz()">Restart</button>
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
        this.count += 1;
      },
      currentQuestion() {
        return this.questions[this.count]
      },
      restartQuiz() {
        this.count = 0;
        this.givenAnswers = {
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: ''
        }
      }
    }
  };
</script>

<style scoped>
    div.container {
        min-height: 80vh;
        display: flex;
        align-items: center;
    }

    div.mx-auto {
        width: 600px;
    }

    div.card {
        height: 400px;
    }
</style>
