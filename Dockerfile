FROM launcher.gcr.io/google/nodejs

WORKDIR /app

# Save buildsha
ARG BUILDSHA=unknown
RUN echo -n ${BUILDSHA} > buildsha.txt

EXPOSE 3000

# Copy application code.
COPY src/* /app/src/
COPY package.json /app/

CMD npm start