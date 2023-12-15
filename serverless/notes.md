
Crear la Funcion Lambda 
```
aws --endpoint-url=http://localhost:4566 lambda create-function --function-name miFuncionLambda \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x --role arn:aws:iam::123456789012:role/irrelevante
```

Crear el Api Rest 

```
aws --endpoint-url=http://localhost:4566 apigateway create-rest-api --name 'miApiLocal'
```
lambda id 
```
{
    "id": "nnkypk6w2f",
    "name": "miApiLocal",
    "createdDate": "2023-12-15T11:23:14-04:00",
    "apiKeySource": "HEADER",
    "endpointConfiguration": {
        "types": [
            "EDGE"
        ]
    },
    "disableExecuteApiEndpoint": false
}
```


por si lo cerraste 

```
aws --endpoint-url=http://localhost:4566 apigateway get-rest-apis
```

### Obtener el ID del Recurso Raíz:
Antes de crear un nuevo recurso, necesitas obtener el ID del recurso raíz de tu API. Utiliza este ID de API en el siguiente comando:

```
aws --endpoint-url=http://localhost:4566 apigateway get-resources --rest-api-id [API_ID]
```

guardar resultado 
resources 
```
{
    "items": [
        {
            "id": "7a9kxzhx7j",
            "path": "/"
        }
    ]
}
```

### Crear un Recurso:
Ahora, crea un recurso (por ejemplo, un punto de enlace) en tu API. Reemplaza [PARENT_ID] con el ID del recurso raíz que obtuviste en el paso anterior:

aws --endpoint-url=http://localhost:4566 apigateway create-resource --rest-api-id [API_ID] --parent-id [PARENT_ID] --path-part miRecurso

```
{
    "id": "0uv0m87oma",
    "parentId": "7a9kxzhx7j",
    "pathPart": "miRecurso1",
    "path": "/miRecurso1"
}
```

### Crear un Método GET:
Vincula un método GET (o cualquier otro método HTTP que prefieras) a tu recurso. Reemplaza [RESOURCE_ID] con el ID de recurso obtenido en el paso anterior:

```
aws --endpoint-url=http://localhost:4566 apigateway put-method --rest-api-id [API_ID] --resource-id [RESOURCE_ID] --http-method GET --authorization-type NONE
```

### Crear una Integración Lambda:
Ahora integra este método con tu función Lambda. Reemplaza [LAMBDA_FUNCTION_ARN] con el ARN de tu función Lambda:

```
aws --endpoint-url=http://localhost:4566 apigateway put-integration --rest-api-id [API_ID] --resource-id [RESOURCE_ID] --http-method GET --type AWS_PROXY --integration-http-method POST --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/[LAMBDA_FUNCTION_ARN]/invocations
```


Obtener list lambdas 
```
aws --endpoint-url=http://localhost:4566 lambda list-functions
```


### Desplegar la API
Desplegar la API:
Finalmente, debes desplegar tu API para que esté accesible. Crea un despliegue usando el siguiente comando:

```
aws --endpoint-url=http://localhost:4566 apigateway create-deployment --rest-api-id [API_ID] --stage-name test

```