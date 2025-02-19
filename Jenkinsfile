pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/vijaya-2005/Sasi-converter.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                bat 'echo "Building..."'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                bat 'echo "Testing..."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application'
                bat 'echo "Deploying..."'
            }
        }
    }
}
