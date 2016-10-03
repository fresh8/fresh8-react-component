# Fresh8 React Component
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Dynamically inject Fresh8 ads into your React app.

## Prerequisite
This project is auto compiled from ES2015 to ES5 by Babel, if you'd like to use the ES2015 code directly you can require it by doing the following:
```
import Fresh8ReactComponent from 'fresh8-react-component/src';
```

## Getting started  
- `npm install fresh8-react-component --save`
- `import Fresh8ReactComponent from 'fresh8ReactComponent';`

## Installation ID's and Slot ID's
During your on-boarding process you'll receive a unique set of ID's for the publications, websites and applications you want to display ads on. We refer to these as "installation ID's", each ID is unique to the publication and allows you to control the ads via our console. Along with these you'll also receive a set of slot ID's that determine what sizes of ad creative will be served to your publications, you can see a list of available slots [here](https://console.fresh8.co/ad-slots).

### Usage
The React component takes all it's configuration as props, below is a list of all the available props.

#### `shouldBreakOut`
This controls if the ads should try and break out of iframe's and append to the most top `window`. It does this by looping over all the `window.parent` properties until there are no more or an error is throw because of a browser security exception. This is useful if you want to inject the ads via a third party ad manger that uses iframe's but still want the ads to be displayed in the correct element outside of the iframe.

| Key              | Value   | Required | Default |
|------------------|---------|----------|---------|
| `shouldBreakOut` | Boolean | N        | `false` |

#### `inApp`
This defines if the ads are being used inside of a web view in Android/iOS.

| Key     | Value   | Required | Default |
|---------|---------|----------|---------|
| `inApp` | Boolean | Y        | `false` |

#### `instID`
The installation ID for the publication you want to create ads for.

| Key      | Value   | Required | Default     |
|----------|---------|----------|-------------|
| `instID` | String  | Y        | `undefined` |

#### `slotID`
The slot size that you'd like to request an for.

| Name     | Type   | Required | Default     |
|----------|------- |----------|-------------|
| `slotID` | String | Y        | `undefined` |

#### `appendPoint`
This is a query selector string that defines where the ad will be appended on the page.

| Name          | Type   | Required | Default     |
|---------------|--------|----------|-------------|
| `appendPoint` | String | Y        | `undefined` |

#### `url`
This allows you to override the default URL that the classification engine uses when determining sports, teams and players are in your content. By default this will use the `window.location`, unless [canonical](https://support.google.com/webmasters/answer/139066?hl=en) link tag is found on the page.

| Key    | Value   | Required | Default                                       |
|--------|---------|----------|-----------------------------------------------|
| `url`  | String  | X        | `window.location` or `<link rel="canonical">` |

#### `view`
View is used for targeting and identifying specific views/pages in the [Fresh8 Console](https://console.fresh8.co). For example you might want to just do a specific set of ads on the `football` view pages.

| Key    | Value   | Required | Default |
|--------|---------|----------|---------|
| `view` | String  | X        | `''`    |

#### `clickTrackingRedirect`
An optional redirection URL used for tracking .E.G a Google DFP click macro `%%CLICK_URL_ESC_ESC%%`.

| Name                    | Type   | Required | Default |
|-------------------------|--------|----------|---------|
| `clickTrackingRedirect` | String | X        | `''`    |

#### `sport`
An optional sport value used for targeting overrides, for example `cricket`.
*Note: Sport is required if `competitors` or `competitions` are added as part of the config.*

| Key     | Value   | Required | Default |
|---------|---------|----------|---------|
| `sport` | String  | X        | `''`    |

#### `match`
An optional match name used for targeting overrides, for example `Manchester United vs Southampton`.

| Key       | Value   | Required | Default |
|---------- |---------|----------|---------|
| `match` | String    | X       | `''`    |

#### `matchID`
An optional [Opta](http://www.optasports.com/) ID used for targeting overrides.
*Note: Opta ID's are only supported for football currently.*

| Key       | Value   | Required | Default |
|---------- |---------|----------|---------|
| `matchID` | String  | X        | `''`    |

#### `competitorIDs`
Optional [Opta](http://www.optasports.com/) ID's used for targeting overrides.
*Note: Opta ID's are only supported for football currently.*

| Key             | Value  | Required | Default |
|-----------------|--------|----------|---------|
| `competitorIDs` | Array  | X        | `[]`    |

#### `competitors`
An optional competitors array used for targeting overrides, for example `['Manchester United', 'Southampton']`.

| Key           | Value  | Required | Default |
|---------------|--------|----------|---------|
| `competitors` | Array  | X        | `[]`    |

#### `competitionIDs`
Optional [Opta](http://www.optasports.com/) ID's used for targeting overrides.
*Note: Opta ID's are only supported for football currently.*

| Key              | Value | Required | Default |
|------------------|-------|----------|---------|
| `competitionIDs` | Array | X        | `[]`    |

#### `competitions`
An optional competitions array used for targeting overrides, for example `['Premier League'] `.

| Key            | Value | Required | Default |
|----------------|-------|----------|---------|
| `competitions` | Array | X        | `[]`    |

## Examples
This is an example of the simplest configuration possible:
```
<Fresh8ReactComponent instID='40410' slotID='f8-003'/>
```

## Contributing and Developing

### Scripts
- `build`: Compiles the code to ES5 into the `dist` folder
