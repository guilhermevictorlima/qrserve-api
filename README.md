# QRServe

Virtual menu project for innovative restaurants.

## Run application

Clone repository:

```bash
git clone git@github.com:guilhermevictorlima/qrserve-api.git
```

Install dependencies:

```bash
npm install
```

Run [Docker](https://docs.docker.com/get-docker/) container:

```bash
docker compose up -d
```

Start application:

```bash
npm run dev
```

## Conventional Commits

Commits must be written as an imperative sentence, like a order. For example, “Add feature” instead of “Added feature” or “Adding feature".

Follow the commit pattern based on the Angular convention:

> `feat`: implementing a feature
>
> `fix`: fixing a bug
>
> `refactor`: refactoring
>
> `test`: automated tests
>
> `style`: code formatting
>
> `perf`: performance tuning
>
> `docs`: inserting documentation
>
> `build`: adjusting build settings
>
> `chore`: no production code change; implementation (of an existing feature, which doesn't involve a fix), configuration (like the .gitignore or .gitattributes), etc

### Examples

```bash
git commit -m "feat: create new button"
git commit -m "fix: fix duplicity"
git commit -m "docs: update README with convention examples"
```
