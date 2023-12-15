configurar aws cli 
```
aws configure
```
Values 
test
test
us-east-1
json

Create a index.html

```
exports.handler = async (event) => {
    console.log("Evento:", event);
    return 'Hola Mundo';
};
```

empaqueta tu handler

zip function.zip index.js

```
aws --endpoint-url=http://localhost:4566 lambda create-function --function-name holaMundoLambda \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x \
--role arn:aws:iam::000000000000:role/irrelevante

```

```
aws --endpoint-url=http://localhost:4566 lambda invoke --function-name holaMundoLambda response.json
```

