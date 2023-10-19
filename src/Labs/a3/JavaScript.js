import BooleanVariables from "./BooleanVariables";
import ES5Functions from "./ES5Functions";
import ES6ArrowFunctions from "./ES6ArrowFunctions";
import IfElse from "./IfElse";
import ImpliedReturns from "./ImpliedReturns";
import OptionalReturns from "./FunctionParenthesisAndParameters";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructuring";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {

  console.log('Hello World!');

  return(
     <div>
        <h1>JavaScript</h1>

        {/* 2.2.2 */}
        <VariablesAndConstants/>

        {/* 2.2.3 */}
        <VariableTypes/>

        {/* 2.2.4 */}
        <BooleanVariables/>

        {/* 2.2.5 */}
        <IfElse/>
        <TernaryOperator/>

        {/* 2.2.6 */}
        <ES5Functions/>
        <ES6ArrowFunctions/>
        <ImpliedReturns/>
        <OptionalReturns/>

        {/* 2.2.7 */}
        <WorkingWithArrays/>

        {/* 2.2.8 */}
        <TemplateLiterals/>

        {/* 2.2.9 */}
        <House/>

        {/* 2.2.10 */}
        <Spread/>

        {/* 2.2.11 */}
        <Destructing/>

        {/* 2.2.12 */}
        <FunctionDestructing/>

     </div>
  );
}
export default JavaScript