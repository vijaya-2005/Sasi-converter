pipeline {
    agent any

    environment {
        // Define Git repository URL and branch
        GIT_REPO = 'https://github.com/vijaya-2005/Sasi-converter.git'
        GIT_BRANCH = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'make build'  // Replace with your build command
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                sh 'make test'  // Replace with your test command
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application'
                sh './deploy.sh'  // Replace with your deploy script
            }
        }
    }

    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
