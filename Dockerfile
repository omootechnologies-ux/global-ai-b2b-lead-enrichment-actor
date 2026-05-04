FROM apify/actor-node:24
COPY --chown=myuser:myuser package*.json ./
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Installed NPM packages:" \
    && npm list --omit=dev --omit=optional --all || true
COPY --chown=myuser:myuser . ./
CMD ["npm", "start"]
