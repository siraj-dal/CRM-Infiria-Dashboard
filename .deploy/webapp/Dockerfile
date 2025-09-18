# Ever Infiria Platform UI

ARG NODE_OPTIONS
ARG NODE_ENV
ARG API_BASE_URL
ARG API_HOST
ARG API_PORT
ARG CLIENT_BASE_URL
ARG INFIRIA_CLOUD_APP
ARG INFIRIA_CLOUD_ENDPOINT
ARG SENTRY_DSN
ARG SENTRY_TRACES_SAMPLE_RATE
ARG SENTRY_PROFILE_SAMPLE_RATE
ARG CHATWOOT_SDK_TOKEN
ARG CHAT_MESSAGE_GOOGLE_MAP
ARG CLOUDINARY_CLOUD_NAME
ARG CLOUDINARY_API_KEY
ARG GOOGLE_MAPS_API_KEY
ARG GOOGLE_PLACE_AUTOCOMPLETE
ARG HUBSTAFF_REDIRECT_URL
ARG DEFAULT_LATITUDE
ARG DEFAULT_LONGITUDE
ARG DEFAULT_CURRENCY
ARG DEFAULT_COUNTRY
ARG DEMO
ARG WEB_HOST
ARG WEB_PORT
ARG INFIRIA_GITHUB_CLIENT_ID
ARG INFIRIA_GITHUB_APP_NAME
ARG INFIRIA_GITHUB_REDIRECT_URL
ARG INFIRIA_GITHUB_POST_INSTALL_URL
ARG INFIRIA_GITHUB_APP_ID
ARG JITSU_BROWSER_URL
ARG JITSU_BROWSER_WRITE_KEY
ARG NO_INTERNET_LOGO
ARG FILE_PROVIDER
ARG PLATFORM_LOGO
ARG INFIRIA_DESKTOP_LOGO_512X512
ARG PLATFORM_PRIVACY_URL
ARG PLATFORM_TOS_URL
ARG PROJECT_REPO
ARG I18N_FILES_URL
ARG COMPANY_NAME
ARG COMPANY_LINK
ARG COMPANY_SITE_NAME
ARG COMPANY_SITE_LINK
ARG COMPANY_GITHUB_LINK
ARG COMPANY_GITLAB_LINK
ARG COMPANY_FACEBOOK_LINK
ARG COMPANY_TWITTER_LINK
ARG COMPANY_IN_LINK
ARG PLATFORM_WEBSITE_URL
ARG PLATFORM_WEBSITE_DOWNLOAD_URL
ARG DESKTOP_APP_DOWNLOAD_LINK_APPLE
ARG DESKTOP_APP_DOWNLOAD_LINK_WINDOWS
ARG DESKTOP_APP_DOWNLOAD_LINK_LINUX
ARG MOBILE_APP_DOWNLOAD_LINK
ARG EXTENSION_DOWNLOAD_LINK

FROM node:20.18.1-alpine3.19 AS dependencies

LABEL maintainer="ever@ever.co"
LABEL org.opencontainers.image.source="https://github.com/ever-co/ever-infiria"

ENV CI=true

# We need to set to "development", because we are using "yarn install" below to setup
# devDependencies even for production builds!
ENV NODE_ENV=development

RUN apk --update add bash && npm i -g npm@9 \
	&& apk add --no-cache --virtual build-dependencies bind-tools curl tar xz jq python3 python3-dev py3-configobj py3-pip py3-setuptools dos2unix gcc g++ git make vips-dev && \
	mkdir /srv/infiria && chown -R node:node /srv/infiria

# Verify the Node.js version
RUN node --version
RUN npm --version

RUN npm install yarn -g --force

COPY wait .deploy/webapp/entrypoint.compose.sh .deploy/webapp/entrypoint.prod.sh .deploy/webapp/replacements.sed /

RUN chmod +x /wait /entrypoint.compose.sh /entrypoint.prod.sh && dos2unix /entrypoint.compose.sh && dos2unix /entrypoint.prod.sh

USER node:node

WORKDIR /srv/infiria

COPY --chown=node:node apps/gauzy/package.json ./apps/gauzy/

COPY --chown=node:node packages/common/package.json ./packages/common/
COPY --chown=node:node packages/utils/package.json ./packages/utils/
COPY --chown=node:node packages/config/package.json ./packages/config/
COPY --chown=node:node packages/constants/package.json ./packages/constants/
COPY --chown=node:node packages/contracts/package.json ./packages/contracts/
COPY --chown=node:node packages/auth/package.json ./packages/auth/
COPY --chown=node:node packages/core/package.json ./packages/core/
COPY --chown=node:node packages/plugin/package.json ./packages/plugin/
COPY --chown=node:node packages/plugins/integration-ai-ui/package.json ./packages/plugins/integration-ai-ui/
COPY --chown=node:node packages/plugins/integration-ai/package.json ./packages/plugins/integration-ai/
COPY --chown=node:node packages/plugins/integration-hubstaff-ui/package.json ./packages/plugins/integration-hubstaff-ui/
COPY --chown=node:node packages/plugins/integration-hubstaff/package.json ./packages/plugins/integration-hubstaff/
COPY --chown=node:node packages/plugins/integration-upwork-ui/package.json ./packages/plugins/integration-upwork-ui/
COPY --chown=node:node packages/plugins/integration-upwork/package.json ./packages/plugins/integration-upwork/
COPY --chown=node:node packages/plugins/integration-github/package.json ./packages/plugins/integration-github/
COPY --chown=node:node packages/plugins/integration-github-ui/package.json ./packages/plugins/integration-github-ui/
COPY --chown=node:node packages/plugins/integration-make-com/package.json ./packages/plugins/integration-make-com/
COPY --chown=node:node packages/plugins/integration-make-com-ui/package.json ./packages/plugins/integration-make-com-ui/
COPY --chown=node:node packages/plugins/integration-zapier-ui/package.json ./packages/plugins/integration-zapier-ui/
COPY --chown=node:node packages/plugins/integration-zapier/package.json ./packages/plugins/integration-zapier/
COPY --chown=node:node packages/plugins/jitsu-analytics/package.json ./packages/plugins/jitsu-analytics/
COPY --chown=node:node packages/plugins/sentry-tracing/package.json ./packages/plugins/sentry-tracing/
COPY --chown=node:node packages/plugins/job-search/package.json ./packages/plugins/job-search/
COPY --chown=node:node packages/plugins/product-reviews/package.json ./packages/plugins/product-reviews/
COPY --chown=node:node packages/plugins/knowledge-base/package.json ./packages/plugins/knowledge-base/
COPY --chown=node:node packages/plugins/posthog/package.json ./packages/plugins/posthog/
COPY --chown=node:node packages/plugins/changelog/package.json ./packages/plugins/changelog/
COPY --chown=node:node packages/plugins/job-proposal/package.json ./packages/plugins/job-proposal/
COPY --chown=node:node packages/plugins/job-employee-ui/package.json ./packages/plugins/job-employee-ui/
COPY --chown=node:node packages/plugins/job-matching-ui/package.json ./packages/plugins/job-matching-ui/
COPY --chown=node:node packages/plugins/job-proposal-ui/package.json ./packages/plugins/job-proposal-ui/
COPY --chown=node:node packages/plugins/job-search-ui/package.json ./packages/plugins/job-search-ui/
COPY --chown=node:node packages/plugins/legal-ui/package.json ./packages/plugins/legal-ui/
COPY --chown=node:node packages/plugins/maintenance-ui/package.json ./packages/plugins/maintenance-ui/
COPY --chown=node:node packages/plugins/onboarding-ui/package.json ./packages/plugins/onboarding-ui/
COPY --chown=node:node packages/plugins/posthog-ui/package.json ./packages/plugins/posthog-ui/
COPY --chown=node:node packages/plugins/public-layout-ui/package.json ./packages/plugins/public-layout-ui/
COPY --chown=node:node packages/plugins/videos-ui/package.json ./packages/plugins/videos-ui/
COPY --chown=node:node packages/plugins/videos/package.json ./packages/plugins/videos/
COPY --chown=node:node packages/plugins/camshot/package.json ./packages/plugins/camshot/
COPY --chown=node:node packages/plugins/soundshot/package.json ./packages/plugins/soundshot/
COPY --chown=node:node packages/plugins/registry/package.json ./packages/plugins/registry/
COPY --chown=node:node packages/ui-core/package.json ./packages/ui-core/
COPY --chown=node:node packages/ui-config/package.json ./packages/ui-config/
COPY --chown=node:node packages/ui-auth/package.json ./packages/ui-auth/

# We do not build here Wakatime plugin, because it used in Desktop Apps for now
# COPY --chown=node:node packages/plugins/integration-wakatime/package.json ./packages/plugins/integration-wakatime/

COPY --chown=node:node decorate-angular-cli.js lerna.json package.json yarn.lock ./
COPY --chown=node:node .scripts/postinstall.js ./.scripts/

# Must be without --production because we need dev deps installed
RUN yarn install --network-timeout 1000000 --frozen-lockfile --ignore-scripts
RUN yarn postinstall.manual
RUN yarn cache clean

FROM node:20.18.1-alpine3.19 AS development

USER node:node

WORKDIR /srv/infiria

COPY --chown=node:node --from=dependencies /wait /entrypoint.compose.sh /entrypoint.prod.sh /replacements.sed  /
COPY --chown=node:node --from=dependencies /srv/infiria .
COPY . .

FROM node:20.18.1-alpine3.19 AS build

WORKDIR /srv/infiria

RUN mkdir dist

COPY --chown=node:node --from=development /srv/infiria .

ENV CI=true

# We make NODE_ENV and other env vars passed as build argument to be available in this stage
ARG NODE_ENV
ARG DEMO
ARG NODE_OPTIONS

ENV NODE_OPTIONS=${NODE_OPTIONS:-"--max-old-space-size=60000"}
ENV NODE_ENV=${NODE_ENV:-production}
ENV DEMO=${DEMO:-false}

ENV IS_DOCKER=true

# Temporary disable caching in NX Cloud for builds
ENV NX_NO_CLOUD=true

RUN yarn build:package:gauzy:docker
RUN yarn build:gauzy:prod:docker

# Clean up
RUN yarn cache clean

FROM nginx:alpine AS production

# USER nginx:nginx

WORKDIR /srv/infiria

COPY --chown=nginx:nginx --from=dependencies /wait /entrypoint.compose.sh /entrypoint.prod.sh /replacements.sed ./
COPY --chown=nginx:nginx .deploy/webapp/nginx.compose.conf /etc/nginx/conf.d/compose.conf.template
COPY --chown=nginx:nginx .deploy/webapp/nginx.prod.conf /etc/nginx/conf.d/prod.conf.template
COPY --chown=nginx:nginx --from=build /srv/infiria/dist/apps/gauzy .

RUN chmod +x wait entrypoint.compose.sh entrypoint.prod.sh && \
	chmod a+rw /etc/nginx/conf.d/compose.conf.template /etc/nginx/conf.d/prod.conf.template

ENV CI=true

ENV NODE_OPTIONS=${NODE_OPTIONS:-"--max-old-space-size=12288"}
ENV NODE_ENV=${NODE_ENV:-production}

ENV API_HOST=${API_HOST:-api}
ENV API_PORT=${API_PORT:-3000}

ENV API_BASE_URL=${API_BASE_URL:-http://localhost:3000}
ENV CLIENT_BASE_URL=${CLIENT_BASE_URL:-http://localhost:4200}
ENV WEB_HOST=${WEB_HOST:-0.0.0.0}
ENV WEB_PORT=${WEB_PORT:-4200}
ENV DEMO=${DEMO:-false}

ENV SENTRY_DSN=${SENTRY_DSN}
ENV SENTRY_TRACES_SAMPLE_RATE=${SENTRY_TRACES_SAMPLE_RATE}
ENV SENTRY_PROFILE_SAMPLE_RATE=${SENTRY_PROFILE_SAMPLE_RATE}
ENV CHATWOOT_SDK_TOKEN=${CHATWOOT_SDK_TOKEN}
ENV CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME}
ENV CLOUDINARY_API_KEY=${CLOUDINARY_API_KEY}
ENV GOOGLE_MAPS_API_KEY=${GOOGLE_MAPS_API_KEY}
ENV GOOGLE_PLACE_AUTOCOMPLETE=${GOOGLE_PLACE_AUTOCOMPLETE:-false}
ENV DEFAULT_LATITUDE=${DEFAULT_LATITUDE:-42.6459136}
ENV DEFAULT_LONGITUDE=${DEFAULT_LONGITUDE:-23.3332736}
ENV DEFAULT_CURRENCY=${DEFAULT_CURRENCY:-USD}
ENV DEFAULT_COUNTRY=${DEFAULT_COUNTRY}
ENV INFIRIA_CLOUD_APP=${INFIRIA_CLOUD_APP:-"https://app.infiria.co"}
ENV INFIRIA_CLOUD_ENDPOINT=${INFIRIA_CLOUD_ENDPOINT:-"https://api.infiria.co"}
ENV CHAT_MESSAGE_GOOGLE_MAP=${CHAT_MESSAGE_GOOGLE_MAP}
ENV HUBSTAFF_REDIRECT_URL=${HUBSTAFF_REDIRECT_URL}
ENV INFIRIA_GITHUB_CLIENT_ID=${INFIRIA_GITHUB_CLIENT_ID}
ENV INFIRIA_GITHUB_APP_NAME=${INFIRIA_GITHUB_APP_NAME}
ENV INFIRIA_GITHUB_REDIRECT_URL=${INFIRIA_GITHUB_REDIRECT_URL}
ENV INFIRIA_GITHUB_APP_ID=${INFIRIA_GITHUB_APP_ID}
ENV INFIRIA_GITHUB_POST_INSTALL_URL=${INFIRIA_GITHUB_POST_INSTALL_URL}
ENV JITSU_BROWSER_URL=${JITSU_BROWSER_URL}
ENV JITSU_BROWSER_WRITE_KEY=${JITSU_BROWSER_WRITE_KEY}
ENV NO_INTERNET_LOGO=${NO_INTERNET_LOGO:-"assets/images/logos/logo_Infiria.svg"}
ENV FILE_PROVIDER=${FILE_PROVIDER:-"LOCAL"}
ENV PLATFORM_LOGO=${PLATFORM_LOGO:-"assets/images/logos/logo_Infiria.svg"}
ENV INFIRIA_DESKTOP_LOGO_512X512=${INFIRIA_DESKTOP_LOGO_512X512:-"assets/icons/icon_512x512.png"}
ENV PLATFORM_PRIVACY_URL=${PLATFORM_PRIVACY_URL:-"https://infiria.co/privacy"}
ENV PLATFORM_TOS_URL=${PLATFORM_TOS_URL:-"https://infiria.co/tos"}
ENV PROJECT_REPO=${PROJECT_REPO:-"https://github.com/ever-co/ever-infiria.git"}
ENV I18N_FILES_URL=${I18N_FILES_URL}
ENV COMPANY_NAME=${COMPANY_NAME:-"Infiria Pvt. LTD"}
ENV COMPANY_LINK=${COMPANY_LINK:-"https://ever.co"}
ENV COMPANY_SITE_NAME=${COMPANY_SITE_NAME:-"Infiria"}
ENV COMPANY_SITE_LINK=${COMPANY_SITE_LINK:-"https://infiria.co"}
ENV COMPANY_GITHUB_LINK=${COMPANY_GITHUB_LINK:-"https://github.com/ever-co"}
ENV COMPANY_GITLAB_LINK=${COMPANY_GITLAB_LINK:-"https://gitlab.com/ever-co"}
ENV COMPANY_FACEBOOK_LINK=${COMPANY_FACEBOOK_LINK:-"https://www.facebook.com/infiriaplatform"}
ENV COMPANY_TWITTER_LINK=${COMPANY_TWITTER_LINK:-"https://twitter.com/infiriaplatform"}
ENV COMPANY_IN_LINK=${COMPANY_IN_LINK:-"https://www.linkedin.com/company/everhq"}
ENV PLATFORM_WEBSITE_URL=${PLATFORM_WEBSITE_URL:-"https://infiria.co"}
ENV PLATFORM_WEBSITE_DOWNLOAD_URL=${PLATFORM_WEBSITE_DOWNLOAD_URL:-"https://infiria.co/downloads"}
ENV DESKTOP_APP_DOWNLOAD_LINK_APPLE=${DESKTOP_APP_DOWNLOAD_LINK_APPLE:-"https://infiria.co/downloads#desktop/apple"}
ENV DESKTOP_APP_DOWNLOAD_LINK_WINDOWS=${DESKTOP_APP_DOWNLOAD_LINK_WINDOWS:-"https://infiria.co/downloads#desktop/windows"}
ENV DESKTOP_APP_DOWNLOAD_LINK_LINUX=${DESKTOP_APP_DOWNLOAD_LINK_LINUX:-"https://infiria.co/downloads#desktop/linux"}
ENV MOBILE_APP_DOWNLOAD_LINK=${MOBILE_APP_DOWNLOAD_LINK:-"https://infiria.co/downloads#mobile"}
ENV EXTENSION_DOWNLOAD_LINK=${EXTENSION_DOWNLOAD_LINK:-"https://infiria.co/downloads#extensions"}

EXPOSE ${WEB_PORT}

ENTRYPOINT [ "./entrypoint.prod.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]
