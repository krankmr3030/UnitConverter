import React from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  validTemps,
  validVols,
  tempConvert,
  toLowerCase,
  volumeConvert,
} from "./util";

class App extends React.Component {
  state = {
    toConvert: "temp",
    result: "",
  };

  onChange = (type) => (e) =>
    this.setState({ [type]: e.target.value, result: "" });

  isValid = () => {
    const {
      inputUnitValue = "",
      inputTargetValue = "",
      toConvert,
    } = this.state;

    const arrOfValids = toConvert === "temp" ? validTemps : validVols;

    return (
      arrOfValids.indexOf(toLowerCase(inputUnitValue)) > -1 &&
      arrOfValids.indexOf(toLowerCase(inputTargetValue)) > -1
    );
  };

  convert = () => {
    const {
      inputUnitValue = "",
      inputTargetValue = "",
      inputValue,
      studentValue,
      toConvert,
    } = this.state;

    if (this.isValid()) {
      const res =
        toConvert === "temp"
          ? tempConvert(
              inputUnitValue,
              inputTargetValue,
              parseFloat(inputValue)
            )
          : volumeConvert(
              inputUnitValue,
              inputTargetValue,
              parseFloat(inputValue)
            );
      this.setState({
        result:
          parseFloat(res).toFixed(2) === parseFloat(studentValue).toFixed(2)
            ? "correct"
            : "incorrect",
      });

      console.log("correct answer is", res, parseFloat(res).toFixed(2));
      
    } else {
      this.setState({ result: "inValid" });
    }
  };

  setResult = () => {
    const { result } = this.state;

    if (result === "correct") {
      return (
        <div className="bg-success alert-box"> Student's answer is CORRECT</div>
      );
    } else if (result === "incorrect") {
      return (
        <div className="bg-danger alert-box">Student's answer is INCORRECT</div>
      );
    } else if (result === "inValid") {
      return (
        <div className="bg-warning alert-box "> Invalid values entered</div>
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <Jumbotron className="">
          <h1 className="display-3">Unit Converter</h1>
          <div className="message"><b>Note: </b><i>Correct output is printed on the console!</i></div>

          {this.setResult()}

          <Form>
            <FormGroup>
              <Label for="convert-select">Select Quantity</Label>
              <Input
                type="select"
                name="convert-select"
                id="convert-select"
                onChange={(e) => this.setState({ toConvert: e.target.value })}
              >
                <option value="temp">Temperatures</option>
                <option value="vol">Volumes</option>
              </Input>
            </FormGroup>
            <FormText>
              Valid values for{" "}
              {this.state.toConvert === "temp"
                ? "temperatures between Kelvin, Celsius, Fahrenheit, and Rankine"
                : "volumes between liters, tablespoons, cubic-inches, cups, cubic-feet, and gallons"}
            </FormText>

            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="inputUnitValue">Input unit of measure</Label>
                  <Input
                    type="text"
                    name="inputUnitValue"
                    id="inputUnitValue"
                    onChange={this.onChange("inputUnitValue")}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="inputTargetValue">Target unit of measure</Label>
                  <Input
                    type="text"
                    name="inputTargetValue"
                    id="inputTargetValue"
                    onChange={this.onChange("inputTargetValue")}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="inputValue">Input Numerical Value</Label>
                  <Input
                    type="number"
                    name="inputValue"
                    id="inputValue"
                    onChange={this.onChange("inputValue")}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label for="studentValue">Input Student response</Label>
                  <Input
                    type="number"
                    name="studentValue"
                    id="studentValue"
                    onChange={this.onChange("studentValue")}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Button color="primary" size="lg" onClick={this.convert}>
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
