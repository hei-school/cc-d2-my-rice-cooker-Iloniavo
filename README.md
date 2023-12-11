[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/PHq8Kfj_)

# Rice Cooker Manager

## Installation

- Install Java SDK : follow steps [here](https://www.oracle.com/java/technologies/downloads/).

- Install Scala : follow steps [here](https://www.ruby-lang.org/fr/documentation/installation/)

- Check if Scala is installed : 
```
scala --version
```

- Compile the code : 
```
scalac Main.scala RiceCoooker.scala
```

- Run the app : 
```
scala Main.scala
```

- Scala linter : 
This Scala project adheres to specific style standards to ensure consistent and readable code. The style rules are enforced using Scalastyle.

### Style Standards

#### 1. File Header
- Files must include a specified header as defined in the `header.txt` file.

#### 2. Line Length
- Maximum line length is restricted to 120 characters.

#### 3. End of Line
- Line endings should be in LF (Unix) format.

#### 4. Code Formatting
- Code formatting follows rules defined in the `scalariform.conf` file.

#### 5. Case Class Parameters
- Parameters in case classes are allowed only with "private" and "protected" modifiers.

### Running Scalastyle


```bash
java -jar lib/scalastyle_2.11-1.0.0-batch.jar --config lib/scalastyle_config.xml --verbose --failOnViolation