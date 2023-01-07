FROM cosmtrek/air

ENV PATH="${PATH}:/home"

WORKDIR /usr/src/app

COPY ./api/go.mod ./api/go.sum ./
RUN go mod download && go mod verify

COPY ./api .
ENTRYPOINT ["air"]