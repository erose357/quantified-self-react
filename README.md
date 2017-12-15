# Quantified Self

Quantified self is a calorie tracker app. Users can add foods with their associated calories to a table and then add foods to meals. The app will calculate how may calories you have used, and how many calories you have left for each meal, as well as totals for the day. It also features search and filter features.

This app is a Turing School Backend Module 4 project to learn Javascript, Node, Express, and JQuery.

## Setup

The app is hosted on github pages at `https://erose357.github.io/quantified-self.html`

The repository for the api used in quantified self can be found at
`https://github.com/blsrofe/qs_node_api`

You can clone the repo by following these steps:


3. Remove the default remote (origin)

  ```shell
  git remote rm origin
  ```

4. Create a new repository on GitHub named `quantified-self`

5. Add your new repository remote - **your remote URL and user name will be different in the command below**

  ```shell
  git remote add origin git@github.com:neight-allen/quantified-self.git
  ```

6. Install the dependencies of the starter kit

  ```shell
gi  npm install
  ```

7. Add, commit, and push up to your repository

  ```shell
  git add .
  git commit -m "Initial commit using starter kit"
  git push origin master
  ```

8. Now add your team member(s) as collaborators to the repository. They can now clone down your `quantified-self` repository as normal.

9. Once each partner clones down the repo, they need to run `npm install` to install the dependencies on their machine.

## Github Pages setup

1. Visit your repository on Github

2. Go to Settings

3. Under the Github Pages section of Options, select 'master' as your source

Be sure to `npm run build` and commit before each push to master. A few seconds after you push up, you should be able to see your application at <https://your-github-username.github.io/quantified-self>.

## Run the Server

To see your code in action, you need to fire up a development server. Use the command:

``` shell
git clone git@github.com:erose357/quantified-self.git
cd quantified-self
npm install
```


You can run the program by entering
```shell
npm start
```
## Contributions

To contribute to this app fork and download then submit a PR to this repository.

## Collaborators

Eddie Rose - @erose357
Becki Srofe - @blsrofe
