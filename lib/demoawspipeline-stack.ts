import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as pipelines from 'aws-cdk-lib/pipelines';



export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DemoawspipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const democicdpipeline = new pipelines.CodePipeline(this, 'demopipeline', {
      synth : new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('bellhoser/cicdk_lab', 'main'),
        commands: [ 'npm ci', 'npm run build', 'npx cdk synth']}});
      
  }
}
