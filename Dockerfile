FROM launcher.gcr.io/google/nodejs

WORKDIR /app

# Save buildsha
ARG COMMIT_SHA=unknown
RUN echo -n ${COMMIT_SHA} > commitsha.txt

EXPOSE 3000

# Copy application code.
COPY src/* /app/src/
COPY package.json /app/

CMD npm start