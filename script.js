let app = new Vue({
  el: '#app',
  data() {
    return {
      current: '',
      changeMode: true };

  },
  methods: {
    press: function (event) {
      let me = this;
      let key = event.target.textContent;

      if (
      key != '=' &&
      key != 'C' &&
      key != 'x' &&
      key != '/' &&
      key != '√' &&
      key != "x^" &&
      key != "1/x"
     )
      {
        me.current += key;

      } else if (key === '=') {

        if (me.current.indexOf('^') > -1) {
          let base = me.current.slice(0, me.current.indexOf('^'));
          let exponent = me.current.slice(me.current.indexOf('^') + 1);
          me.current = eval('Math.pow(' + base + ',' + exponent + ')');
        } else {
          me.current = eval(me.current);
        }

      } else if (key === 'C') {

        me.current = '';

      } else if (key === '*') {

        me.current += '*';

      } else if (key === '/') {

        me.current += '/';

      } else if (key === '+') {

        me.current += '+';

      } else if (key === '-') {

        me.current += '-';


      } else if (key === '^') {

        me.current += '^';

      } else if (key === "1/x")
      {
        me.current = 1/me.current;
      }
    },
    changeModeEvent: function () {
      let me = this;
      me.changeMode = !me.changeMode;
    } } });