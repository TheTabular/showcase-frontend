'use client';

import Image from 'next/image';

export default function AWSContent({ onBackChange }: { onBackChange?: (showBack: boolean, onBack?: () => void) => void }) {
  return (
    <div className="">
      <div className="space-y-8 max-w-4xl mx-auto">

        {/* Hosting Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Hosting</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* Route 53 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/route53.svg"
                      alt="Route 53"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Route 53</h3>
                </div>
              </div>
              
              {/* Amplify */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/amplify.svg"
                      alt="Amplify"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Amplify</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Users</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* DynamoDB */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/dynamodb.svg"
                      alt="DynamoDB"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">DynamoDB</h3>
                </div>
              </div>
              
              {/* SES */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/ses.svg"
                      alt="SES"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">SES</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CI/CD Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">CI/CD</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* ECR */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/ecr.svg"
                      alt="ECR"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">ECR</h3>
                </div>
              </div>
              
              {/* CodePipeline */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/codepipeline.svg"
                      alt="CodePipeline"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">CodePipeline</h3>
                </div>
              </div>
              
              {/* CodeBuild */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/codebuild.svg"
                      alt="CodeBuild"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">CodeBuild</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Server Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Server</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* Lambda */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/lambda.svg"
                      alt="Lambda"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Lambda</h3>
                </div>
              </div>
              
              {/* API Gateway */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/aws/apigateway.svg"
                      alt="API Gateway"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">API Gateway</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scaling Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Scaling</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
              <div className="text-center">
                <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                  <Image
                    src="/aws/ec2.svg"
                    alt="EC2"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">EC2</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Permissions</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
              <div className="text-center">
                <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                  <Image
                    src="/aws/iam.svg"
                    alt="IAM"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">IAM</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Monitoring</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
              <div className="text-center">
                <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                  <Image
                    src="/aws/cloudwatch.svg"
                    alt="CloudWatch"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">CloudWatch</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}