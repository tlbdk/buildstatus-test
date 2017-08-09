FROM launcher.gcr.io/google/nodejs

WORKDIR /src

EXPOSE 3000

# Copy application code.
COPY src/* /app/src/
COPY package.json /app/

CMD npm start
