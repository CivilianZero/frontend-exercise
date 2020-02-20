<template>
  <div class="container">
    <div class="mx-auto">
      <div class="card">
        <div class="card-body" v-if="count < 5">
          <h3 class="card-title">Question {{ count+1 }}</h3>
          <h5 class="card-title">{{ currentQuestion().text }}</h5>
          <div class="card-text">
            <div
              class="custom-control custom-radio"
              v-for="(answer, aIndex) in currentQuestion().answers"
              :key="aIndex"
            >
              <input
                class="custom-control-input"
                :name="'quizQuestion'+count"
                :id="'quizQuestion'+aIndex"
                :value="answer"
                type="radio"
                v-model="givenAnswers['question'+(count+1)]"
              />
              <label class="custom-control-label" :for="'quizQuestion'+aIndex">{{ answer }}</label>
            </div>
          </div>
        </div>
        <div class="card-body" v-else>
          <h3 class="card-title">Results</h3>
          <div class="card-text" v-for="(question, index) in questions" :key="'result'+index">
            <p>
              {{ question.text }}
              : <strong>{{ givenAnswers['question'+(index+1)]}}</strong>
            </p>
          </div>
        </div>
        <div class="card-footer text-right">
          <button
            :disabled="givenAnswers['question'+(count+1)] === ''"
            @click="nextQuestion"
            class="btn btn-primary col-4"
            type="button"
            v-if="count < 5"
          >Next</button>
          <button class="btn btn-success col-4" v-else @click="restartQuiz()">Restart</button>
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
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
      }
    };
  },
  methods: {
    nextQuestion() {
      this.count += 1;
    },
    currentQuestion() {
      return this.questions[this.count];
    },
    restartQuiz() {
      this.count = 0;
      this.givenAnswers = {
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
      };
    }
  }
};
</script>

<style>
div.container {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

div.mx-auto {
  width: 600px;
}

.card {
  height: 400px;
	-webkit-box-shadow: 5px 5px 5px 0 grey;
	-moz-box-shadow: 5px 5px 5px 0 grey;
	box-shadow: 5px 5px 5px 0 grey;
}
</style>
