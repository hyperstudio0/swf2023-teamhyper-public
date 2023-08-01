//
//  ViewController.swift
//  ExVoIP
//
//  Created by Jake.K on 2022/02/07.
//

import UIKit
import CallKit
import Alamofire

class ViewController: UIViewController {
    let provider = CXProvider(configuration: CXProviderConfiguration())
    private let callController = CXCallController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = .white
        
        // 발신자 표시, 수신 차단 기능 활성화
        CXCallDirectoryManager.sharedInstance
            .reloadExtension(withIdentifier: "com.ExVoIP.CallDirectory") { error in
                print(error ?? "")
            }
    }
    
    @IBAction func didTap3582Button(_ sender: Any) {
        self.receiving3582()
    }
    
    @IBAction func didTap0257Button(_ sender: Any) {
        self.receiving0257()
    }
    
    @IBAction func didTapOutgoingButton(_ sender: Any) {
        self.outgoing()
    }
    
    struct DecodableType: Decodable { let url: String }
    
    private func authNumber() {
        let parameters: Parameters = [
            "value": "test"
        ]
        let headers: HTTPHeaders = [
            "Accept": "application/json"
        ]

        AF.request("http://localhost:3002/api/v1/smart-contract/auth", method: .post, parameters: parameters, headers: headers).validate().responseJSON { response in
            switch response.result {
                case .success(let value):
                    print(value)
                case .failure(let error):
                    print("oops")
                    print(error)
                }
        }.cURLDescription { description in
            print(description)
        }

    }
    
    // 전화 받기
    private func receiving3582() {
        authNumber()
        
        provider.setDelegate(self, queue: nil)
        
        // TODO: UUID값과 update값은 PushKit에서 넘어온(pushRegistry 메소드) 정보를 이용하여 사용
        // PushKit 포스팅 글 참고: https://ios-development.tistory.com/875
        let update = CXCallUpdate()
        update.remoteHandle = CXHandle(type: .generic, value: "01041533582")
        update.localizedCallerName = "발신자의 이름1 발신자의 이름1발신자의 이름1발신자의 이름1발신자의 이름1발신자의 이름1"
        provider.reportNewIncomingCall(with: UUID(), update: update) { error in
            print(error ?? "")
        }
    }
    
    private func receiving0257() {
        provider.setDelegate(self, queue: nil)
        
        // TODO: UUID값과 update값은 PushKit에서 넘어온(pushRegistry 메소드) 정보를 이용하여 사용
        // PushKit 포스팅 글 참고: https://ios-development.tistory.com/875
        let update = CXCallUpdate()
        update.remoteHandle = CXHandle(type: .generic, value: "01057370257")
        update.localizedCallerName = "발신자의 이름2"
        provider.reportNewIncomingCall(with: UUID(), update: update) { error in
            print(error ?? "")
        }
    }
    
    // 전화 하기
    private func outgoing() {
        let uuid = UUID()
        let handle = CXHandle(type: .emailAddress, value: "palatable77@gmail.com")
        
        let startCallAction = CXStartCallAction(call: uuid, handle: handle)
        let transaction = CXTransaction(action: startCallAction)
        self.callController.request(transaction) { error in
            print(error ?? "")
        }
    }
}

extension ViewController: CXProviderDelegate {
    func providerDidReset(_ provider: CXProvider) {
    }
    
    func provider(_ provider: CXProvider, perform action: CXEndCallAction) {
        action.fulfill()
    }
    
    // 전화 받기 델리게이트 메소드
    func provider(_ provider: CXProvider, perform action: CXAnswerCallAction) {
        action.fulfill()
    }
    
    // 전화 걸기 델리게이트 메소드
    func provider(_ provider: CXProvider, perform action: CXStartCallAction) {
        action.fulfill()
    }
}
